(ns drop-dot.core (:require [cljs.nodejs :as node]
                            [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]]
                            [clojure.string :as s])
                  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                                   [cljs-asynchronize.macros :as dm :refer [asynchronize]]))

(node/enable-util-print!)

(def pure-js (node/require "../js/pure-js.js"))

(defn chan-vec-cmd->exec [input-chan] 
  (go-loop [v (<! input-chan)]
   (if (= (count v) 0)
			 nil
       (let [rc  (chan)
            cmd (first v)]
         (.execAndPrint pure-js cmd (fn [res] (go (>! rc res)))) 
         (<! rc)
         (recur (vec (rest v)))))))

(defn exec-vec-of-commands [v]
  (let [c (chan)]
    (chan-vec-cmd->exec (go v))))

(defn dropdot-folder-exists? []
  (.dirExists pure-js "~/Dropbox/.drop-dot"));;

(defn dropbox-installed? []
  (.dirExists pure-js "~/Dropbox"))

(defn unix-OS? []
  (or (= (aget node/process "platform") "linux")
      (= (aget node/process "platform") "darwin")))

(defn chan-path-exists? [line]
  (let [res (node/require "../js/pure-js.js")
        d   (chan)]
    (.confirmPathExists res line (fn [res] (go (>! d res)))) d))

(defn line->chan-verified-path [line]
  (go 
   (if (<! (chan-path-exists? line))
       line 
       (str "ERROR: " line " does not exist on this machine."))))

(defn protocol-msg? [arg] (or (s/includes? arg "ERROR: ") (s/includes? arg "NOTICE: ")))

(defn chan-verified-path->chan-verified-droppee [chan-verified-path]
  (go 
    (let [verified-path (<! chan-verified-path)
          rc (chan 1)
          f (fn [res] (if (= res true) (go (>! rc (str "NOTICE: " verified-path " is already synced on this machine."))) (go (>! rc verified-path))))]
      (do
       (if (protocol-msg? verified-path) 
           (>! rc verified-path)
           (.pointsWithinDropboxDropDot pure-js verified-path f))
       (<! rc)))))

(defn drop-chan-verified-droppee [c]
 (go 
   (let [verified-droppee (<! c)]
     (if (protocol-msg? verified-droppee) 
         (println verified-droppee)
         (.execDropOnVerifiedDroppee pure-js verified-droppee)))))

(defn drop-line [line]
  (-> line
     (line->chan-verified-path)
     (chan-verified-path->chan-verified-droppee)
     (drop-chan-verified-droppee)))

(defn line->chan-linkable-path [line]
  (let [basename      (.getBasename pure-js line)
        target-path   (str "~/Dropbox/.drop-dot/" basename)
        rc            (chan 1)
        cb            (fn [res] 
                        (if (= res true)  
                            (go (>! rc line))
                            (go (>! rc (str "ERROR: Invalid line: there is nothing to link " line " to in your ~/Dropbox/.dot-drop folder.")))))]
  (.pathExists pure-js target-path cb) rc))

(defn chan-linkable-path->chan-linkable-path-that-wants-linking [chan-linkable-path]
  (go 
    (let [linkable-path (<! chan-linkable-path)
          rc (chan 1)
          f (fn [res] (if (= res true)  (go (>! rc (str "NOTICE: " linkable-path " is already synced.")))  (go (>! rc linkable-path))))]
      (do
       (if (protocol-msg? linkable-path) 
           (>! rc linkable-path)
           (.pointsWithinDropboxDropDot pure-js linkable-path f))
       (<! rc)))))

(defn chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking [chan-linkable-path-that-wants-linking] ;i.e., without conflict
  (go
   (let [linkable-path (<! chan-linkable-path-that-wants-linking)
         rc            (chan 1)
          f            (fn [res] 
                         (if (= res true)  
                         (go (>! rc (str "ERROR: " linkable-path " already has a version on this system; please remove this file and re-run this command.")))  
                         (go (>! rc linkable-path))))]
     (do
      (if (protocol-msg? linkable-path) 
          (>! rc linkable-path)
          (.pathExists pure-js linkable-path f))
      (<! rc)))))

(defn link-chan-path-that-needs-linking [c]
  (go 
    (let [config-path         (.localExpandHomeDir pure-js (<! c)) ; expanded path
          config-path-dirname (.getDirname pure-js config-path) ; this path will be expanded w/in its pure-js function
          linkable-basename   (.getBasename pure-js config-path)] ; this path will be expanded w/in its pure-js function
      (if (protocol-msg? config-path) (println (str config-path))
        (exec-vec-of-commands 
          [(str "mkdir -vp " config-path-dirname)
           (str "ln -sv ~/Dropbox/.drop-dot/" linkable-basename " " config-path)])))))

(defn link-line [line]
  (-> line
    (line->chan-linkable-path)
    (chan-linkable-path->chan-linkable-path-that-wants-linking)
    (chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking)
    (link-chan-path-that-needs-linking))) 

(defn chan-config-paths->exec-drop-dot [chan-config cmd]
   (go-loop [chan-config chan-config]
     (let [line (<! chan-config)];
       (when line
           (if (= cmd "drop") (drop-line line))
           (if (= cmd "link") (link-line line))
           (recur chan-config)))))

(defn chan-config-paths []
  (let [c (chan)]
   (go (let [res         (node/require "../js/pure-js.js")
         ;config-path     "/home/george/Dropbox/drop-dot/js/file.in" 
         config-path     "~/Dropbox/.drop-dot/.drop-dot" 
         wcc             (chan 1)
         wcc-jammer      (fn [error, res] (go (>! wcc res)))
         get-wc          (.getFileLineCount res config-path wcc-jammer)
         lines           (js/parseInt (str (<! wcc)))
         close-if-done  #(if (= lines (count (.-buf c))) (close! c))
        ] ; triaged question: is this redundant?

    (.getLinesFromFile 
       res 
       config-path
       (fn [res] (go (>! c res) (close-if-done)))))) c))

(defn check-for-sys-requirements []
   (if (not (dropbox-installed?)) 
     (do (println "Dropbox not installed.")
         (.exit node/process)));
   (if (not (unix-OS?)) 
     (do (println "Dot-drop requires a UNIX system to run.") (.exit node/process)))
   (if (not (dropbox-installed?)) 
     (do (println "Please install Dropbox in your home folder before running this program.")
         (.exit node/process))))

(defn -main [& args]
  ;(let [minimist (node/require "minimist")
  (let [minimist (cljs.nodejs/require "minimist")
          argv     (minimist (clj->js (vec args)))
          e        (or (.-e argv) "e option")
          arg      (or (aget (aget argv "_") 0) "$HOME")]
  (check-for-sys-requirements)
  (if (= arg "drop")
    (do
     (println "Dropping files from your config into ~/Dropbox/.drop-dot")
     (chan-config-paths->exec-drop-dot (chan-config-paths) "drop")))
  (if (= arg "link")
    (do
      (println "Linking files specified in  your config.")
      (chan-config-paths->exec-drop-dot (chan-config-paths) "link")))))

(set! *main-cli-fn* -main)

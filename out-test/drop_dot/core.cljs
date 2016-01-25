(ns drop-dot.core (:require [cljs.nodejs :as node]
                            [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]]
                            [clojure.string :as s]
						                ;[cljs.test :refer-macros [deftest is testing run-tests]]
                            )
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(node/enable-util-print!)

(def pure-js (node/require "/home/george/Dropbox/drop-dot/js/get-lines-from-file.js"))

(defn jam-first-callback-arg-into-chan [c] 
  (fn [arg] (go (>! c arg))))

(defn jam-second-callback-arg-into-chan [c] 
  (fn [arg] (go (>! c arg))))

(defn chan-vec-cmd->exec [input-chan] 
  (go-loop [v (<! input-chan)]
   (if (= (count v) 0)
       (println "done") ; nil
       (let [rc  (chan)
            cmd (first v)]
         (.execAndPrint pure-js cmd (fn [res] (go (>! rc res)))) 
         (<! rc)
         (recur (vec (rest v)))))))

(defn exec-vec-of-commands [v]
  (let [c (chan)]
    (chan-vec-cmd->exec (go v))))

;(exec-vec-of-commands ["echo 1" "echo 2" "echo 3" "echo 4" "echo 5"])
















; TODO
#_(defn dropbox-and-drop-dot-folder-exists?)
#_(defn unix-system?)

(defn chan-path-exists? [line]
  (let [res (node/require "/home/george/Dropbox/drop-dot/js/get-lines-from-file.js")
        d   (chan)]
    (.confirmPathExists res line (fn [res] (go (>! d res)))) d))

(defn line->chan-verified-path [line]
  (go 
   (if (chan-path-exists? line) 
     line 
     (str "ERROR: Config " line " does not exist."))))

; REPL tested
(defn protocol-msg? [arg] (or (s/includes? arg "ERROR: ") (s/includes? arg "NOTICE: ")))

;QWERTY
(defn chan-verified-path->chan-verified-droppee [chan-verified-path]
  (go 
    (let [verified-path (<! chan-verified-path)
          rc chan
          f (fn [res] (if (= res true) (go (>! c res)) (go (>! c (str "NOTICE: " verified-path " is already synced.")))))]
      (if (protocol-msg? verified-path) 
          (>! rc verified-path)
          (.pointsWithinDropboxDropDot pure-js verified-path f)) 
      rc)))

;QWERTY
(defn drop-chan-verified-droppee [c]
 (go 
   (let [verified-droppee (<! c)]
     (if (protocol-msg? verified-droppee) 
         (println verified-droppee) 
         (.execDropOnVerifiedDroppee pure-js verified-droppee)))))

;Pass "ERROR: ..." when necessary through these channels
(defn drop-line [line]
  (-> line
    (line->chan-verified-path)
    (chan-verified-path->chan-verified-droppee) ; i.e., ¬already linked to $D/.dot-drop/..
    (drop-chan-verified-droppee))) ; i.e.: mv line $D/.drop-dot/base && ln -s $D/.drop-dot/base line

; Pass "ERROR: ..." and "NOTICE: ..." messages when needed
(defn link-line [line]
  (-> line
    (line->chan-verified-linkee) ; i.e., ¬already ﬂinked up
    (link-a-chan-verified-linkee))) ; i.e.: `cp line $D/.dot-drop && ln -s $D/.dot-drop line` via silent node

; REPL tested
(defn chan-config->exec-drop-dot [chan-config cmd]
  (go-loop [chan-config chan-config]
    (let [line (<! chan-config)]
      (when line
          (if (= cmd "drop") (drop-line line))
          (if (= cmd "link") (link-line line))
          (recur chan-config))
        (println "done"))))

(defn chan-config-paths []
  (let [c (chan)]
   (go (let [res         (node/require "/home/george/Dropbox/drop-dot/js/get-lines-from-file.js") ; "../js/get-liens-from-file.js" fails in repl
         config-path     "/home/george/Dropbox/drop-dot/js/file.in" 
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

(defn -main [& args]
  (let [minimist (node/require "minimist")
          argv     (minimist (clj->js (vec args)))
          e        (or (.-e argv) "e option")
          arg      (or (aget (aget argv "_") 0) "$HOME")]

  (if (= arg "drop")
    (println "drop mode"))

  (if (= arg "link")
    (println "link mode"))))

(set! *main-cli-fn* -main)
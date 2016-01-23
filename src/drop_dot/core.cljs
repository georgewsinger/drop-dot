(ns drop-dot.core
  (:require [cljs.nodejs :as node]
            [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(node/enable-util-print!)

(defn path-exists? [path])


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

  (println argv)

  (if (= arg "drop")
    (println "drop mode"))

  (if (= arg "link")
    (println "link mode"))

    ))

(set! *main-cli-fn* -main)

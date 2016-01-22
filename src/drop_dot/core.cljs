(ns drop-dot.core
  (:require [cljs.nodejs :as node]
            [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(node/enable-util-print!)

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

(ns drop-dot.core-test
  (:require [drop-dot.core :as core]
						[cljs.test :refer-macros [deftest is testing run-tests]]
            [cljs.nodejs :as node]
            [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(deftest basic
  (testing "Testing basic CLJS tests."
   (is (= 5 5))))

;(go (is = "first line" (<! (core/chan-config-files))))

#_((defn drop-line [line] (println "line: " line))
   (defn link-line [line] (println "line: " line)))

#_((def cc (chan 2))
   (go (>! cc "1") (>! cc "2") (close! cc))
   (core/chan-config->exec-drop-dot cc "drop"))
        
(run-tests 'drop-dot.core-test)



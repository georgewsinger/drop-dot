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
        
(run-tests 'drop-dot.core-test)



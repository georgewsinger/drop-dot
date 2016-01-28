;  _____         _        
; |_   _|__  ___| |_ ___  
;   | |/ _ \/ __| __/ __| 
;   | |  __/\__ \ |_\__ \ 
;   |_|\___||___/\__|___/ 
;                         

(ns drop-dot.core-test
  (:require        [drop-dot.core :as core]
						       [cljs.test :refer-macros [deftest is testing run-tests async]]
                   [cljs.nodejs :as node]
                   [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]]
                   [clojure.string :as s])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(deftest chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST
  (async done
    (go
     (is 
      (s/includes? 
        (<! (core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking (go "~/.in-home-and-drop-dot-seperately-no-links"))) 
        "ERROR:"))
     (is 
      (s/includes? 
       (<! (core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking (go "~/.in-drop-dot-and-home-but-home-points-to-something-random"))) 
       "ERROR: "))
     (is 
      (=
       (<! (core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking (go "~/.in-drop-dot-only"))) 
            "~/.in-drop-dot-only"))
     (done))))

(deftest chan-linkable-path->chan-linkable-path-that-wants-linking-TEST
  (async done
    (go
     (is (s/includes? (<! (core/chan-linkable-path->chan-linkable-path-that-wants-linking (go "~/.home-to-drop-dot"))) "NOTICE: "))
     (is (= (<! (core/chan-linkable-path->chan-linkable-path-that-wants-linking (go "~/.in-home-and-drop-dot-seperately-no-links"))) "~/.in-home-and-drop-dot-seperately-no-links"))
     (is (= (<! (core/chan-linkable-path->chan-linkable-path-that-wants-linking (go "~/.in-drop-dot-and-home-but-home-points-to-something-random"))) "~/.in-drop-dot-and-home-but-home-points-to-something-random"))
     (done))))

(deftest line->chan-linkable-path-TEST
  (async done
   (go
    (let [c (chan 1)]
      (is (= (<! (core/line->chan-linkable-path "~/.TDD-this-file-in-dot-drop-dot")) "~/.TDD-this-file-in-dot-drop-dot"))
      (is (s/includes? (<! (core/line->chan-linkable-path "~/.TDD-this-file-doesnt-exist")) "ERROR: "))
      (is (s/includes? (<! (core/line->chan-linkable-path "~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")) "ERROR: "))
      (done)))))

(deftest core-tests
  (async done
   (testing "Testing core-tests."
     (go (is (= (<! (core/chan-path-exists? "/home/george/Dropbox")) true))
         (done)))))

(deftest support-functions
  (is (= (core/dropbox-installed?) true))
  (is (= (core/unix-OS?) true))
  (is (= (core/dropdot-folder-exists?) true)))

(ns drop-dot.core-test
  (:require [drop-dot.core :as core]
						[cljs.test :refer-macros [deftest is testing run-tests async]]
            [cljs.nodejs :as node]
            [cljs.core.async :refer [buffer offer! poll! close! take! put! chan <! >! alts!]]
            [clojure.string :as s])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

; [ ] "~/.home-to-drop-dot" -> "$D/.drop-dot/.home-to-drop-dot" ; "NOTICE: "
; [ ] "~/.in-home-and-drop-dot-seperately-no-links", "$D/.drop-dot/.in-home-and-drop-dot-seperately-no-links" ; "~/name" = "~/name"

; [ ] "~/.in-drop-dot-and-home-but-home-points-to-something-random" -> "~/random/.in-drop-dot-and-home-but-home-points-to-something-random",
; [ ] "$D/.drop-dot/.in-drop-dot-and-home-but-home-points-to-something-random" ; "~/name" = "~/name"

; path ∈ config; path ∈ .drop-dot; path -> .drop-dot already -> "NOTICE: "
; path ∈ config; path ∈ .drop-dot; path -/-> .drop-dot -> "path" = "path"
  ; path ∈ config; path ∈ .drop-dot; path ∈ ~/hard-file        ⇒ "path" = "path"
  ; path ∈ config; path ∈ .drop-dot; path -> something-random  ⇒ "path" = "path"

;QWERTY
(deftest chan-linkable-path->chan-path-that-wants-linking-TEST
  (async done
    (go
        (is (s/includes? (<! (core/chan-linkable-path->chan-path-that-wants-linking (go "~/.home-to-drop-dot"))) "NOTICE: "))
        (is (= (<! (core/chan-linkable-path->chan-path-that-wants-linking (go "~/.in-home-and-drop-dot-seperately-no-links"))) "~/.in-home-and-drop-dot-seperately-no-links"))
        (is (= (<! (core/chan-linkable-path->chan-path-that-wants-linking (go "~/.in-drop-dot-and-home-but-home-points-to-something-random"))) "~/.in-drop-dot-and-home-but-home-points-to-something-random"))
        (done))))

;QWERTY
(deftest line->chan-linkable-path-TEST
  (async done
    (go
      (let [c (chan 1)]
        (is (= (<! (core/line->chan-linkable-path "~/.TDD-this-file-in-dot-drop-dot")) "~/.TDD-this-file-in-dot-drop-dot"))
        (is (s/includes? (<! (core/line->chan-linkable-path "~/.TDD-this-file-doesnt-exist")) "ERROR: "))
        (is (s/includes? (<! (core/line->chan-linkable-path "~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")) "ERROR: "))
        (done)))))

(deftest async-test
  (testing "Testing some core.async functionality."
    (async done
      (go
        (is (= (<! (go "val1")) "val1"))
        (done)))))

(deftest drop-fns
  (testing "Testing drop-dot drop functions."
    (async done
      (go
        (let [verified-path "~/.test21" cvp (chan)]

          #_(is (<! (>! (chan) "~/.test21") "~/.test21")) 
          #_(>! cvp "~/.test21")
          #_(is (<! (core/chan-verified-path->chan-verified-droppee (>! (chan) "~/.test21")) "~/.test21")) 

          #_(is (= (<! (core/line->chan-verified-path "~/.thisexists")) "~/.thisexists"))

          #_(is (s/includes? (<! (core/line->chan-verified-path "~/.thisdoesnotexist")) "ERROR:"))

          #_(go (println (<! cvp)))
          #_(is (<! (core/chan-verified-path->chan-verified-droppee cvp)) "~/.test22")
          #_(is (<! (core/chan-verified-path->chan-verified-droppee cvp) "~/.test21" )
        ) (done)
        )))))

(deftest core-tests
  (async done
   (testing "Testing core-tests."
    (go (is (= (<! (core/chan-path-exists? "/home/george/Dropbox")) true))
      (done)))))


#_(deftest support-functions
  (is (= (core/dropbox-installed?) true))
  (is (= (core/unix-OS?) true))
  (is (= (core/dropdot-folder-exists?) true)))

;(run-tests 'drop-dot.core-test)

;(go (is (= (<! (core/chan-path-exists? "/home/george/Dropbox")) true)))
  
;(def ha (go (<! (core/chan-path-exists? "/home/george/Dropbox"))))

#_(deftest basic
   (testing "Testing basic CLJS tests."
    (is (= 6 5))))

#_(deftest core-tests
    (is  =(ha
           false)))


#_(defn chan-path-exists? [line])

;(go (is = "first line" (<! (core/chan-config-files))))
#_((defn drop-line [line] (println "line: " line))
   (defn link-line [line] (println "line: " line)))

#_((def cc (chan 2))
   (go (>! cc "1") (>! cc "2") (close! cc))
   (core/chan-config->exec-drop-dot cc "drop"))
        
; The manual test of drop-dot dot (and, in particular, of (chan-verified-path->chan-verified-droppee ..)
; ~/.test30 // ¬linked                           ; outcome: link message
; ~/.test31 //  linked -> $D/.test31             ; outcome: link message
; ~/.test32 //  linked -> $D/.drop-dot/.test32   ; outcome: NOTICE: already linked

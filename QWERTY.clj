;   
;    _____        _______ ____ _______   __ 
;   / _ \ \      / / ____|  _ \_   _\ \ / / 
;  | | | \ \ /\ / /|  _| | |_) || |  \ V /  
;  | |_| |\ V  V / | |___|  _ < | |   | |   
;   \__\_\ \_/\_/  |_____|_| \_\|_|   |_|   
;                                           

(def test-chan (chan))
(go (>! test-chan "val"))

(defn chan->chan [c]
  (go 
    (let [value     (<! c)
          ret-chan (chan)]
      (do
        (>! ret-chan value) 
        (<! ret-chan))))) ; perhaps stick this in a named chan instead of relying on the go block return value?

(go (println (<! (chan->chan test-chan))))

; more instructional example



Putting then immediately removing value from channel causes weird behavior (ClojureScript core.async)

The following is a contrived example for learning purposes. It involves jamming the string "val" into a channel and then immediately removing it within a go block:

(go
 (do
   (>! test-chan1 "val")
   (<! test-chan1))) ; AFAIK, this go block returns a channel with "val" as its eventual input

(def test-chan1 (chan))

(go 
  (println 
    (<! 
      (go 
        (do 
          (>! test-chan1 "val") 
          (<! test-chan1)))))) ; the return value of the (do..) is "val" 
                               ; ...hence the return value of the nested go block should be a channel containing "val"
                               ; hence (println ..) should eventually print "val" to the console

**Question:** Why does this code snippet not print "val" to the console?

clojurescript clojure core.async




;   
;    _____        _______ ____ _______   __ 
;   / _ \ \      / / ____|  _ \_   _\ \ / / 
;  | | | \ \ /\ / /|  _| | |_) || |  \ V /  
;  | |_| |\ V  V / | |___|  _ < | |   | |   
;   \__\_\ \_/\_/  |_____|_| \_\|_|   |_|   
;                                           

; `drop-dot link` should probably be called `drop-dot update`

(line->chan-verified-linkee) ; i.e., ¬already ﬂinked up

CONFIG FILE:
  ~/.test

COMPUTER A:
  drop-dot drop
  ~/.test -> ~/.drop-dot/.test

DESIRED STATE: 
  ~/.test -> ~/.drop-dot/.test

"NOTICE: ~/.test is already linked to ~/Dropbox/drop-dot/.test"

(if 
 (and 
  (is-linĸ? line) 
  (is-linked-within-drop-dot? line))
 (>! rc (str "NOTICE: " line " is already linked to drop-dot."))

function pointsWithinDropboxDropDot(path, cb) {
  pointsWithin(path, "~/Dropbox/.drop-dot", cb);
}

f (fn [res] (if (= res true)  (go (>! rc (str "NOTICE: " verified-path " is already synced.")))  (go (>! rc verified-path)) ))]
(.pointsWithinDropboxDropDot pure-js verified-path f))

(defn line->chan-verified-linkee [line]
  (go 
    (let [rc (chan 1)
          f (fn [res] (if (= res true)  (go (>! rc (str "NOTICE: " verified-path " is already synced.")))  (go (>! rc verified-path)) ))]
      (do
      (if (protocol-msg? verified-path) 
          (>! rc verified-path)
          (.pointsWithinDropboxDropDot pure-js verified-path f))
      (<! rc)))))


; INTENDED LOGIC:
;   1. basename
;   2.  (basename ∈ ~/Dropbox/.drop-dot) ⇒ (>! rc line)
;   3. ¬(basename ∈ ~/Dropbox/.drop-dot) ⇒ (>! rc "ERROR: ")
; QWERTY
(defn line->chan-linkable-path [line]
  (let [basename      (.getBasename pure-js line)
        target-path   (str "~/Dropbox/.drop-dot/" basename)
        rc            (chan 1)
        cb            (fn [res] 
                        (if (= res true)  
                            (go (>! rc line))
                            (go (>! rc (str "ERROR: Invalid line: there is nothing to sync " line " to in your ~/Dropbox/.dot-drop folder.")))))])
  (.pathExists pure-js target-path cb)
  rc)

;QWERTY
(deftest line->chank-linkable-path-TEST
  (testing "Testing line->chan-linkable-path.")
  (async done
    (go
      (let [c (chan 1)]
        (is (= (<! (core/line->chan-linkable-path "~/.TDD-this-file-in-dot-drop-dot")) "~/.TDD-this-file-in-dot-drop-dot"))
        (is (s/includes? (<! (core/line->chan-linkable-path "~/.TDD-this-file-doesnt-exist")) "ERROR: "))
        (is (s/includes? (<! (core/line->chan-linkable-path "~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")) "ERROR: "))
        (done)))))

; ~/.test20 => =[~/.test20]=
; ~/.test40 => =[~/.test20]
; ~/.testFUCKYOU => =["ERROR: ... "]=

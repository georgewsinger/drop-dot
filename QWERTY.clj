;   
;    _____        _______ ____ _______   __ 
;   / _ \ \      / / ____|  _ \_   _\ \ / / 
;  | | | \ \ /\ / /|  _| | |_) || |  \ V /  
;  | |_| |\ V  V / | |___|  _ < | |   | |   
;   \__\_\ \_/\_/  |_____|_| \_\|_|   |_|   
;                                           

Q: What happens if I drop TWICE? Will the program fuck up?

---

; `drop-dot link` should probably be called `drop-dot update`
(defn chan-linkable-path->chan-path-that-wants-linking [chan-linkable-path]
  (go 
    (let [linkable-path (<! chan-linkable-path)
          rc (chan 1)
          f (fn [res] (if (= res true)  (go (>! rc (str "NOTICE: " linkable-path " is already synced.")))  (go (>! rc linkable-path)) ))]
      (do
       (if (protocol-msg? linkable-path) 
           (>! rc linkable-path)
           (.pointsWithinDropboxDropDot pure-js linkable-path f))
       (<! rc)))))




; [ ] "~/.home-to-drop-dot" -> "$D/.drop-dot/.home-to-drop-dot" ; "NOTICE: "
; [ ] "~/.in-home-and-drop-dot-seperately-no-links", "$D/.drop-dot/.in-home-and-drop-dot-seperately-no-links" ; "~/name" = "~/name"

; [ ] "~/.in-drop-dot-and-home-but-home-points-to-something-random" -> "~/random/.in-drop-dot-and-home-but-home-points-to-something-random",
; [ ] "$D/.drop-dot/.in-drop-dot-and-home-but-home-points-to-something-random" ; "~/name" = "~/name"

; path ∈ config; path ∈ .drop-dot; path -> .drop-dot already -> "NOTICE: "
; path ∈ config; path ∈ .drop-dot; path -/-> .drop-dot -> "path" = "path"
  ; path ∈ config; path ∈ .drop-dot; path ∈ ~/hard-file        ⇒ "path" = "path"
  ; path ∈ config; path ∈ .drop-dot; path -> something-random  ⇒ "path" = "path"

(deftest chan-linkable-path->chan-path-that-wants-linking-TEST
  (async done
    (go
      (let [c (chan 1)]
        (is (s/includes? (<! (core/chan-linkable-path->chan-path-that-wants-linking "~/.home-to-drop-dot")) "NOTICE: "))
        (is (= (<! (core/chan-linkable-path->chan-path-that-wants-linking "~/.in-home-and-drop-dot-seperately-no-links")) "~/.in-home-and-drop-dot-seperately-no-links"))
        (is (= (<! (core/chan-linkable-path->chan-path-that-wants-linking "~/.in-drop-dot-and-home-but-home-points-to-something-random")) "~/.in-drop-dot-and-home-but-home-points-to-something-random"))
        (done)))))


;NOTES:
;1. localConflictDoesntExist OR localConflicExistsButIsntAlreadySymLinkedToDropboxDotFolder
;(path-doesn't-exist?) -> pass-through OTHERWISE "ERROR: ... please remove and re-run this command."
;(path-exists) && (pathNotDropBoxLinked?)

(defn chan-linkable-path-that-wants-linking->chan-linkable-path-that-needs-linking [chan-linkable-path-that-wants-linking] ;i.e., without conflict
  (go
   (let [linkable-path (<! chan-linkable-path-that-wants-linking)
         rc            (chan 1)
          f            (fn [res] 
                         (if (= res true))  
                         (go (>! rc (str "ERROR: " linkable-path " already has a version on this system; please remove this file and re-run this command.")))  
                         (go (>! rc linkable-path)))]
     (do
      (if (protocol-msg? linkable-path) 
          (>! rc linkable-path)
          (.pathExists pure-js linkable-path f)) ; ■ .isntLocallyConflicted 
      (<! rc)))))

B:

(defn link-chan-path-that-needs-linking [c]
  (go 
    (let [config-path         (.localExpandHomeDir pure-js (<! c)) ; expanded path
          config-path-dirname (.getDirname pure-js config-path) ; expanded path w/in pure-js function
          linkable-basename   (.getBasename pure-js config-path)])) ; expanded w/in pure-js function
      (exec-vec-of-commands 
        [(str "mkdir -vp " config-dirname)
         (str "ln -sv ~/Dropbox/.drop-dot/" linkable-basename " " config-path)]))

BUT WHAT HAPPENS IF FILE ALREADY EXISTS?


1. absurd/doesnt/exist/linkable-basename 
2. 
  mkdir -vp expanded(config-dirname)
  ln -s expanded(~/Dropbox/.drop-dot/linkable-basename) expanded(config-path)

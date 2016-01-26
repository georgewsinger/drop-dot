;   
;    _____        _______ ____ _______   __ 
;   / _ \ \      / / ____|  _ \_   _\ \ / / 
;  | | | \ \ /\ / /|  _| | |_) || |  \ V /  
;  | |_| |\ V  V / | |___|  _ < | |   | |   
;   \__\_\ \_/\_/  |_____|_| \_\|_|   |_|   
;                                           

; `drop-dot link` should probably be called `drop-dot update`

A:

1. already/linkable-basename
2. 

(defn chan-linkable-path->chan-path-that-needs-linking [chan-linkable-path]
  (go 
    (let [linkable-path (<! chan-linkable-path)
          rc (chan 1)
          f (fn [res] (if (= res true)  (go (>! rc (str "NOTICE: " linkable-path " is already synced.")))  (go (>! rc linkable-path)) ))]
      (do
      (if (protocol-msg? linkable-path) 
          (>! rc linkable-path)
          (.pointsWithinDropboxDropDot pure-js linkable-path f))
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

1. absurd/doesnt/exist/linkable-basename 
2. 
  mkdir -vp expanded(config-dirname)
  ln -s expanded(~/Dropbox/.drop-dot/linkable-basename) expanded(config-path)

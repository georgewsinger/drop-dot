;   
;    _____        _______ ____ _______   __ 
;   / _ \ \      / / ____|  _ \_   _\ \ / / 
;  | | | \ \ /\ / /|  _| | |_) || |  \ V /  
;  | |_| |\ V  V / | |___|  _ < | |   | |   
;   \__\_\ \_/\_/  |_____|_| \_\|_|   |_|   
;                                           

; The manual test of drop-dot dot (and, in particular, of (chan-verified-path->chan-verified-droppee ..)
; ~/.test30 // ¬linked                           ; outcome: link message
; ~/.test31 //  linked -> $D/.test31             ; outcome: link message
; ~/.test32 //  linked -> $D/.drop-dot/.test32   ; outcome: NOTICE: already linked

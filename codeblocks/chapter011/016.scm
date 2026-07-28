(define outgoing
  (make-SR-frame 'outgoing       ; for debugging
                 home            ; base frame
                 (up 1 0 0)      ; x direction
                 24/25           ; velocity as fraction of c
                 ((chart home)
                  start-event)))

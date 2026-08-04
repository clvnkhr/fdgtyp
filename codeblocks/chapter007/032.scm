(define (g gamma Cartan)
(let ((omega
((Cartan->forms
(Cartan->Cartan-over-map Cartan gamma))
((differential gamma) d/dt))))
(define ((the-state-derivative) state)
(let ((t ((point R1-rect) (ref state 0)))
(u (ref state 1)))
(up 1 (* -1 (omega t) u))))
the-state-derivative))

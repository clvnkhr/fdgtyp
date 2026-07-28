(define-coordinates t R1-rect)

(s:map/r
(lambda (omega)
((omega
(((covariant-derivative sphere-Cartan gamma)
d/dt)
u_gamma))
((point R1-rect) 'tau)))
(basis->1form-basis basis-over-gamma))
;; (up (+ (* -1
;; (sin (alpha tau))
;; (cos (alpha tau))
;; ((D beta) tau)
;; (u^1 tau))
;; ((D u^0) tau))
;; (/ (+ (* (u^0 tau) (cos (alpha tau)) ((D beta) tau))
;; (* ((D alpha) tau) (cos (alpha tau)) (u^1 tau))
;; (* ((D u^1) tau) (sin (alpha tau))))
;; (sin (alpha tau))))

(define (((((F->directional-derivative F) v) u) f) m)
(define (g delta)
(- ((u f) m) (((((F v) delta) u) f) m)))
((D g) 0))

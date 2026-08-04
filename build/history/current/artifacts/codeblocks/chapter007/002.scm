(define (Lie-directional coordsys order)
(let ((Phi (phi coordsys order)))
(F->directional-derivative (F-Lie Phi))))

(define (((F-Lie phi) v) delta)
(pushforward-vector ((phi v) delta) ((phi v) (- delta))))

(define ((((phi coordsys order) v) delta) m)
((point coordsys)
(series:sum (((exp (* delta v)) (chart coordsys)) m)
order)))

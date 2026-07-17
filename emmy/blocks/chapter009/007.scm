(define (metric->Lagrangian metric coordsys)
  (define (L state)
    (let ((q (ref state 1)) (qd (ref state 2)))
      (define v
        (components->vector-field (lambda (m) qd) coordsys))
      ((* 1/2 (metric v v)) ((point coordsys) q))))
  L)

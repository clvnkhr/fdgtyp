(define L2
  (metric->Lagrangian (literal-metric 'm R2-rect)
                      R2-rect))

(define (L1 state)
  (sqrt (* 2 (L2 state))))

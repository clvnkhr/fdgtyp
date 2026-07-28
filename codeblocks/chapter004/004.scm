(define v
  (* (up (literal-manifold-function 'b^0 R2-rect)
         (literal-manifold-function 'b^1 R2-rect))
     e-vector-basis))

((e-dual-basis v) R2-rect-point)
;; (up (bˆ0 (up x0 y0)) (bˆ1 (up x0 y0)))

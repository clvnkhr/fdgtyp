(define theta (literal-1form-field 'THETA R3-rect))
(define Y (literal-vector-field 'Y-rect R2-rect))

(((- ((pullback mu) (d theta)) (d ((pullback mu) theta))) X Y)
 ((point R2-rect) (up 'x0 'y0)))
;; 0

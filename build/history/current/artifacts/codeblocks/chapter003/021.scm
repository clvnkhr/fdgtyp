(define omega (literal-1form-field 'a R2-rect))

(define v (literal-vector-field 'b R2-rect))

((omega v) R2-rect-point)
;; (+ (* (b^0 (up x y)) (a_0 (up x0 y0)))
;;    (* (b^1 (up x y)) (a_1 (up x0 y0))))

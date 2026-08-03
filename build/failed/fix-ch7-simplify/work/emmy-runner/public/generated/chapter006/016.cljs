(def theta (literal-oneform-field 'THETA R3-rect))

(def Y (literal-vector-field 'Y-rect R2-rect))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- ((pullback mu) (d theta)) (d ((pullback mu) theta))) X Y)
            ((point R2-rect) (up 'x0 'y0))))
;; => 0

(def omega (literal-oneform-field 'a R2-rect))

(def v (literal-vector-field 'b R2-rect))

((omega v) R2-rect-point)
;; => (+ (* (a_0 (up x0 y0)) (b↑0 (up x0 y0))) (* (a_1 (up x0 y0)) (b↑1 (up x0 y0))))

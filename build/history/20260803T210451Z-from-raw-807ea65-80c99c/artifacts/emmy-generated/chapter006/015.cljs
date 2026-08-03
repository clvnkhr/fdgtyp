(def f (literal-manifold-function 'f-rect R3-rect))

(def X (literal-vector-field 'X-rect R2-rect))

(((- ((pullback mu) (d f)) (d ((pullback mu) f))) X) ((point R2-rect) (up 'x0 'y0)))
;; => 0

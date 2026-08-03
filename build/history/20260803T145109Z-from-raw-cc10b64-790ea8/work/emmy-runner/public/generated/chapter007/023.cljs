(def circular (- (* x d:dy) (* y d:dx)))

(def f (literal-manifold-function 'f-rect R2-rect))

(def R2-rect-point ((point R2-rect) (up 'x0 'y0)))

(((((covariant-derivative R2-rect-Cartan) d:dx) circular) f) R2-rect-point)
;; => (((partial 1) f-rect) (up x0 y0))

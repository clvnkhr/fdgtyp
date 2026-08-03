(def R3-rect (coordinate-system-at R3 :rectangular :origin))

(define-coordinates (up x y z) R3-rect)

(def R3-rect-point ((point R3-rect) (up 'x0 'y0 'z0)))

(def g (literal-manifold-function 'g-rect R3-rect))

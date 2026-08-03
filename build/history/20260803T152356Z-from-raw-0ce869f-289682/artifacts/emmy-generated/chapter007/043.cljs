(define-coordinates (up x y z) R3-rect)

(def theta (+ (* a dx) (* b dy) (* c dz)))

(def omega (+ (* a (wedge dy dz)) (* b (wedge dz dx)) (* c (wedge dx dy))))

(def X (literal-vector-field 'X-rect R3-rect))

(def Y (literal-vector-field 'Y-rect R3-rect))

(def Z (literal-vector-field 'Z-rect R3-rect))

(def V (literal-vector-field 'V-rect R3-rect))

(def R3-rect-point ((point R3-rect) (up 'x0 'y0 'z0)))

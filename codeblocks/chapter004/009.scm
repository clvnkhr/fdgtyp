(define R3-rect (coordinate-system-at 'rectangular 'origin R3))
(define-coordinates (up x y z) R3-rect)
(define R3-rect-point ((point R3-rect) (up 'x0 'y0 'z0)))
(define g (literal-manifold-function 'g-rect R3-rect))

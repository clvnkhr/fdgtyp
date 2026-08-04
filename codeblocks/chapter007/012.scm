(define X (literal-vector-field 'X-rect R3-rect))
(define Y (literal-vector-field 'Y-rect R3-rect))
(define Z (literal-vector-field 'Z-rect R3-rect))

(define a (literal-manifold-function 'alpha R3-rect))
(define b (literal-manifold-function 'beta R3-rect))
(define c (literal-manifold-function 'gamma R3-rect))

(define omega
(+ (* a (wedge dx dy))
(* b (wedge dy dz))
(* c (wedge dz dx))))

(define ((L1 X) omega)
(+ ((interior-product X) (d omega))
(d ((interior-product X) omega))))

((- (((Lie-derivative X) omega) Y Z)
(((L1 X) omega) Y Z))
((point R3-rect) (up 'x0 'y0 'z0)))
;; 0

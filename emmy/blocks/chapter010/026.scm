(define F
  (Faraday (literal-manifold-function 'Ex SR)
           (literal-manifold-function 'Ey SR)
           (literal-manifold-function 'Ez SR)
           (literal-manifold-function 'Bx SR)
           (literal-manifold-function 'By SR)
           (literal-manifold-function 'Bz SR)))

(define 4-current
  (J (literal-manifold-function 'rho SR)
     (literal-manifold-function 'Ix SR)
     (literal-manifold-function 'Iy SR)
     (literal-manifold-function 'Iz SR)))

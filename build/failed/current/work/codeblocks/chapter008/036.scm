(define nabla
  (covariant-derivative
   (Christoffel->Cartan
    (literal-Christoffel-2 'C R4-rect))))

(define R (Riemann nabla))
(define T (torsion-vector nabla))

(define (TT omega x y)
  (omega (T x y)))

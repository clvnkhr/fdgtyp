(define nabla
  (covariant-derivative
   (Christoffel->Cartan
    (symmetrize-Christoffel
     (literal-Christoffel-2 'C R4-rect)))))

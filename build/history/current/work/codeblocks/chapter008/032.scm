(define nabla
  (covariant-derivative
   (Christoffel->Cartan
    (symmetrize-Christoffel
     (literal-Christoffel-2 'C R4-rect)))))

(((torsion nabla) omega X Y)
 (typical-point R4-rect))
;; 0

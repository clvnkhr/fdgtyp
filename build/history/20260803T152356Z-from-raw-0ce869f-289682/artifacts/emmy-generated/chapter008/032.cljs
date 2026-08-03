(def nabla
  (covariant-derivative (Christoffel->Cartan (symmetrize-Christoffel
                                               (literal-Christoffel-2 'C R4-rect)))))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((torsion nabla) omega X Y) (typical-point R4-rect)))
;; => 0

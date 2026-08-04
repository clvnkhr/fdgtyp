(define ((F nabla) omega u v)
  (omega ((nabla u) v)))
(((- (F (covariant-derivative
         (Christoffel->Cartan
          (metric->Christoffel-2
           (coordinate-system->metric S2-spherical)
           (coordinate-system->basis S2-spherical)))))
     (F (covariant-derivative
         (Christoffel->Cartan
          (metric->Christoffel-2
           (coordinate-system->metric S2-stereographic)
           (coordinate-system->basis S2-stereographic))))))
  (literal-1form-field 'omega S2-spherical)
  (literal-vector-field 'u S2-spherical)
  (literal-vector-field 'v S2-spherical))
 ((point S2-spherical) (up 'theta 'phi)))
;; 0

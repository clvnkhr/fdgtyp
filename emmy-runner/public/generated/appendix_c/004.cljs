(defn F [nabla] (fn [omega u v] (omega ((nabla u) v))))

;; scmutils simplified this to 0 automatically; Emmy's simplifier times out here, so leave the expression unsimplified.
(((- (F (covariant-derivative (Christoffel->Cartan (metric->Christoffel-2 (coordinate-system->metric S2-spherical)
                                                                          (coordinate-system->basis S2-spherical)))))
     (F (covariant-derivative (Christoffel->Cartan (metric->Christoffel-2 (coordinate-system->metric S2-stereographic)
                                                                          (coordinate-system->basis
                                                                            S2-stereographic))))))
   (literal-oneform-field 'omega S2-spherical)
   (literal-vector-field 'u S2-spherical)
   (literal-vector-field 'v S2-spherical))
  ((point S2-spherical) (up 'theta 'phi)))
;; => (- (+ (* (omega_0 (up theta phi)) (+ (* (((partial 0) v↑0) (up theta phi)) (u↑0 (up theta phi))) (* (((partial 1) v↑0) (up theta phi)) (u↑1 (up theta phi))) (* (+ (* (+ (* (/ (+ (* (sin theta) (- (sin... <result truncated: 8580045 characters total; inspect in the web runner>

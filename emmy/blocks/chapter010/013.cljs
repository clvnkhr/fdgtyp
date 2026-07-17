;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((Laplacian spherical-metric orthonormal-spherical-basis) (literal-manifold-function 'f spherical))
            R3-spherical-point))
;; => (/ (+ (* (expt r0 2) (expt (sin theta0) 2) (((expt (partial 0) 2) f) (up r0 theta0 phi0))) (* 2 r0 (expt (sin theta0) 2) (((partial 0) f) (up r0 theta0 phi0))) (* (cos theta0) (sin theta0) (((partial 1) f) (up r0 theta0 phi0))) (* (expt (sin theta0) 2) (((expt (partial 1) 2) f) (up r0 theta0 phi0))) (((expt (partial 2) 2) f) (up r0 theta0 phi0))) (* (expt r0 2) (expt (sin theta0) 2)))

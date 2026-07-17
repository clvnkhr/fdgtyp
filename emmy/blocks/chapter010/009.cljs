;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((orthonormal-spherical-oneform-basis ((gradient spherical-metric orthonormal-spherical-basis)
                                                  (literal-manifold-function 'f spherical)))
            R3-spherical-point))
;; => (up (((partial 0) f) (up r0 theta0 phi0)) (/ (((partial 1) f) (up r0 theta0 phi0)) r0) (/ (((partial 2) f) (up r0 theta0 phi0)) (* r0 (sin theta0))))

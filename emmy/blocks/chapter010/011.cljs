;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((orthonormal-spherical-oneform-basis ((curl spherical-metric orthonormal-spherical-basis) v))
            R3-spherical-point))
;; => (up (/ (+ (* (cos theta0) (v↑2 (up r0 theta0 phi0))) (* (sin theta0) (((partial 1) v↑2) (up r0 theta0 phi0))) (* -1 (((partial 2) v↑1) (up r0 theta0 phi0)))) (* r0 (sin theta0))) (/ (+ (* -1 r0 (sin theta0) (((partial 0) v↑2) (up r0 theta0 phi0))) (* -1 (sin theta0) (v↑2 (up r0 theta0 phi0))) (((partial 2) v↑0) (up r0 theta0 phi0))) (* r0 (sin theta0))) (/ (+ (* r0 (((partial 0) v↑1) (up r0 theta0 phi0))) (v↑1 (up r0 theta0 phi0)) (* -1 (((partial 1) v↑0) (up r0 theta0 phi0)))) r0))

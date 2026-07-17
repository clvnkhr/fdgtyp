;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((divergence spherical-metric orthonormal-spherical-basis) v) R3-spherical-point))
;; => (/ (+ (* r0 (sin theta0) (((partial 0) v↑0) (up r0 theta0 phi0))) (* (cos theta0) (v↑1 (up r0 theta0 phi0))) (* 2 (sin theta0) (v↑0 (up r0 theta0 phi0))) (* (sin theta0) (((partial 1) v↑1) (up r0 theta0 phi0))) (((partial 2) v↑2) (up r0 theta0 phi0))) (* r0 (sin theta0)))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((Christoffel->symbols (metric->Christoffel-2 (g-sphere 'R) S2-basis))
            ((point S2-spherical) (up 'theta0 'phi0))))
;; => (down (down (up 0 0) (up 0 (/ (cos theta0) (sin theta0)))) (down (up 0 (/ (cos theta0) (sin theta0))) (up (* #emmy/bigint -1 (cos theta0) (sin theta0)) 0)))

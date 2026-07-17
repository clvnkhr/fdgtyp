;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((Christoffel->symbols (metric->Christoffel-1 (g-sphere 'R) S2-basis))
            ((point S2-spherical) (up 'theta0 'phi0))))
;; => (down (down (down 0 0) (down 0 (* (expt R 2) (cos theta0) (sin theta0)))) (down (down 0 (* (expt R 2) (cos theta0) (sin theta0))) (down (* #emmy/bigint -1 (expt R 2) (cos theta0) (sin theta0)) 0)))

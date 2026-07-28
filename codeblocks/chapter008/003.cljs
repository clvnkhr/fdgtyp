;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((Riemann (covariant-derivative sphere-Cartan)) dphi d:dtheta d:dphi d:dtheta)
            ((point S2-spherical) (up 'theta0 'phi0))))
;; => 1

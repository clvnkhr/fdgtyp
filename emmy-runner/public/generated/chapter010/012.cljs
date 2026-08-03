(simplify (((divergence spherical-metric orthonormal-spherical-basis) v) R3-spherical-point))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((Laplacian spherical-metric orthonormal-spherical-basis)
             (literal-manifold-function 'f spherical))
            R3-spherical-point))

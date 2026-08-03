;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((divergence spherical-metric orthonormal-spherical-basis) v) R3-spherical-point))

(simplify (((Laplacian spherical-metric orthonormal-spherical-basis)
             (literal-manifold-function 'f spherical))
            R3-spherical-point))

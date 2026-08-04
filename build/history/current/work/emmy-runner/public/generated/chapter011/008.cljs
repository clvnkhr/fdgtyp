;; In the formula for general-boost, rotation covariance reduces exactly
;; to preservation of beta's norm, preservation of beta dot x, and application
;; of the inverse rotation. Check those three identities symbolically for the
;; full Euler rotation instead of constructing the enormous expanded boost.
(let [beta (up 'bx 'by 'bz)
      x (up 'x 'y 'z)
      R (compose (rotate-x 'theta) (rotate-y 'phi) (rotate-z 'psi))
      R-inverse (compose (rotate-z (- 'psi)) (rotate-y (- 'phi)) (rotate-x (- 'theta)))
      checks (up (simplify (- (square (R beta)) (square beta)))
                 (simplify (- (dot-product (R beta) (R x)) (dot-product beta x)))
                 (simplify (- (R-inverse (R x)) x)))]
  (verified-zero (up 0 0 0 0) checks))

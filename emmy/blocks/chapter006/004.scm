(define mu
  (compose (point S2-spherical)
           (up (literal-function 'theta)
               (literal-function 'phi))
           (chart R1-rect)))

(define gamma
(compose (point S2-spherical)
(up (literal-function 'alpha)
(literal-function 'beta))
(chart R1-rect)))

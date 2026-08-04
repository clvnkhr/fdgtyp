(define basis-over-gamma
(basis->basis-over-map gamma S2-basis))

(define u_gamma
(* (up (compose (literal-function 'u^0)
(chart R1-rect))
(compose (literal-function 'u^1)
(chart R1-rect)))
(basis->vector-basis basis-over-gamma)))

(series:for-each print-expression
((((exp (* 'a (Lie-derivative Jz))) d/dy)
(literal-manifold-function 'f-rect R3-rect))
((point R3-rect) (up 1 0 0)))
5)
;; (((partial 0) f-rect) (up 1 0))
;; (* -1 a (((partial 1) f-rect) (up 1 0)))
;; (* -1/2 (expt a 2) (((partial 0) f-rect) (up 1 0)))
;; (* 1/6 (expt a 3) (((partial 1) f-rect) (up 1 0)))
;; (* 1/24 (expt a 4) (((partial 0) f-rect) (up 1 0)))
;; ;Value: ...

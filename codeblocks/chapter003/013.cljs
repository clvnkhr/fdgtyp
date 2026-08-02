(def omega
  (components->oneform-field (down (literal-function 'a_0 R2->R) (literal-function 'a_1 R2->R))
                             R2-rect))

((omega (down d:dx d:dy)) R2-rect-point)
;; => (down (a_0 (up x0 y0)) (a_1 (up x0 y0)))

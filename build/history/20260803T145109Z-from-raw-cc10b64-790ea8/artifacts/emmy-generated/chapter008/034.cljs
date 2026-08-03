;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((cyclic-sum (fn [x y z] ((Riemann nabla) omega x y z))) X Y Z) (typical-point R4-rect)))
;; => 0

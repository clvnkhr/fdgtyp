(show-expression
  (((Lagrange-equations Lsphere) (up (literal-function 'alpha) (literal-function 'beta))) 't))
;; => (down (- (+ (* (+ (* (+ (* (cos (beta t)) (cos (alpha t)) (/ 1 2)) (* (cos
;;    (beta t)) (cos (alpha t)) (/ 1 2))) (sin (alpha t)) (- (sin (beta t)))) (*
;;    (+ (* (sin (beta t)) (cos (alpha t)) (/ 1 2)) (* (... <result truncated:
;;    22005 characters total; inspect in the web runner>

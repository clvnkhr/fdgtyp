;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((D g) 'x 'y))
;; => (down (up (+ (* 2 x) (* 2 y)) (+ (* -3 (expt x 2)) (* 6 x y) (* -3 (expt y 2))) (* (exp x) (exp y))) (up (+ (* 2 x) (* 2 y)) (+ (* 3 (expt x 2)) (* -6 x y) (* 3 (expt y 2))) (* (exp x) (exp y))))

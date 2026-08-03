(defn g [x y] (up (square (+ x y)) (cube (- y x)) (exp (+ x y))))

((D g) 'x 'y)
;; => (down (up (* 2 (+ x y)) (* 3 (expt (- y x) 2) -1) (exp (+ x y)))
;;          (up (* 2 (+ x y)) (* 3 (expt (- y x) 2)) (exp (+ x y))))

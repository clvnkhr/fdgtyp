(defn L1 [state] (sqrt (square (velocity state))))

;; Emmy expands speed²^(3/2) into speed² sqrt(speed²). Cancel that common
;; denominator before simplifying the numerators, then put the compact common
;; denominator back so the displayed result remains readable.
(let [x (literal-function 'x)
      y (literal-function 'y)
      equations (((Lagrange-equations L1) (up x y)) 't)
      speed2 (+ (square ((D x) 't)) (square ((D y) 't)))
      denominator (* speed2 (sqrt speed2))]
  (/ (simplify (* equations denominator)) denominator))
;; => (down (* (+ (* -1 ((D x) t) ((D y) t) (((expt D 2) y) t))
;;                (* (((expt D 2) x) t) (expt ((D y) t) 2)))
;;             (/ 1
;;                (* (+ (expt ((D x) t) 2) (expt ((D y) t) 2))
;;                   (sqrt (+ (expt ((D x) t) 2) (expt ((D y) t) 2))))))
;;          (* (+ (* (expt ((D x) t) 2) (((expt D 2) y) t))
;;                (* -1 ((D x) t) (((expt D 2) x) t) ((D y) t)))
;;             (/ 1
;;                (* (+ (expt ((D x) t) 2) (expt ((D y) t) 2))
;;                   (sqrt (+ (expt ((D x) t) 2) (expt ((D y) t) 2)))))))

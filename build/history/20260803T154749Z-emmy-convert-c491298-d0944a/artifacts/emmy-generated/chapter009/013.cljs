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

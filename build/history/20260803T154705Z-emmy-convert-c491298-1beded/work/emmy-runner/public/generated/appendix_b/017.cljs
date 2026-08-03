(((* (+ D I) (- D I)) (literal-function 'f)) 'x)
;; => (+ (* -1 ((D f) x)) (((expt D 2) f) x) (- ((D f) x) (f x)))

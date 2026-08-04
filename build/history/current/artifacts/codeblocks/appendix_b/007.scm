((literal-function 'f) 'x)
;; (f x)

((compose (literal-function 'f) (literal-function 'g)) 'x)
;; (f (g x))

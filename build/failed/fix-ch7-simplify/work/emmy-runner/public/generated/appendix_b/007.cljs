((literal-function 'f) 'x)
;; => (f x)

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((compose (literal-function 'f) (literal-function 'g)) 'x))
;; => (f (g x))

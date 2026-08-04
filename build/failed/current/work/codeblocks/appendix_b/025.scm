(define (f x y)
  (* (square x) (cube y)))

(define (g x y)
  (up (f x y) y))

(define (h x y)
  (f (f x y) y))

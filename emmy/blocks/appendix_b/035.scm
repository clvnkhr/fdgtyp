(define (f v)
  (let ((x (ref v 0))
        (y (ref v 1)))
    (* (square x) (cube y))))



(define (g v)
  (let ((x (ref v 0))
        (y (ref v 1)))
    (up (f v) y)))

(define h (compose f g))

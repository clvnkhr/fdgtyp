(define (h s)
  (g (ref s 0) (ref s 1)))

(h (up 'x 'y))
;; (g x y)

((D g) 'x 'y)
;; (down (((partial 0) g) x y) (((partial 1) g) x y))

((D h) (up 'x 'y))
(down (((partial 0) g) x y) (((partial 1) g) x y))

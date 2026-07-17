(define ((cyclic-sum f) x y z)
  (+ (f x y z)
     (f y z x)
     (f z x y)))

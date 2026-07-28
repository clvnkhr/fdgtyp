(define (SO3-metric v1 v2)
  (+ (* (e^x v1) (e^x v2))
     (* (e^y v1) (e^y v2))
     (* (e^z v1) (e^z v2))))

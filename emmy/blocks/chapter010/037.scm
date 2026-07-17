(define eta-inverse (invert g-Minkowski SR-basis))

(define (Force charge F 4velocity component)
  (* -1 charge
     (contract (lambda (a b)
                 (contract (lambda (e w)
                             (* (w 4velocity)
                                (F e a)
                                (eta-inverse b component)))
                           SR-basis))
               SR-basis)))

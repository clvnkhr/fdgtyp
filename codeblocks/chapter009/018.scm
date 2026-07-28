(define ((trace2down metric basis) tensor)
  (let ((inverse-metric-tensor
         (metric:invert metric basis)))
    (contract
     (lambda (v1 w1)
       (contract
        (lambda (v w)
          (* (inverse-metric-tensor w1 w)
             (tensor v v1)))
        basis))
     basis)))

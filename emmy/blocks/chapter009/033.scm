(define ((drop2 metric-tensor basis) tensor)
  (lambda (v1 v2)
    (contract
     (lambda (e1 w1)
       (contract
        (lambda (e2 w2)
          (* (metric-tensor v1 e1) (tensor w1 w2) (metric-tensor e2 v2)))
        basis))
     basis)))

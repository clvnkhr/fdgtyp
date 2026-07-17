(define ((general-boost2 direction v/c) 4tuple-prime)
  (let ((delta-ct-prime (4tuple->ct 4tuple-prime))
        (delta-x-prime (4tuple->space 4tuple-prime)))
    (let ((betasq (square v/c)))
      (let ((bx (dot-product direction delta-x-prime))
            (gamma (/ 1 (sqrt (- 1 betasq)))))
        (let ((alpha (- gamma 1)))
          (let ((delta-ct
                 (* gamma (+ delta-ct-prime (* bx v/c))))
                (delta-x
                 (+ (* gamma v/c direction delta-ct-prime)
                    delta-x-prime
                    (* alpha direction bx))))
            (make-4tuple delta-ct delta-x)))))))

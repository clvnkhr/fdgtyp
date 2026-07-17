(define (proper-time-interval 4tuple)
  (sqrt (- (square (4tuple->ct 4tuple))
           (square (4tuple->space 4tuple)))))

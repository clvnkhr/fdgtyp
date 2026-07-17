(define (pullback-vector-field mu:N->M mu^-1:M->N)
  (pushforward-vector mu^-1:M->N mu:N->M))

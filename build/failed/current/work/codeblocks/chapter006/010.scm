(define ((pullback-function mu:N->M) f-on-M)
(compose f-on-M mu:N->M))

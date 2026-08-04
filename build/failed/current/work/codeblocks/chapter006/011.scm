(define ((pushforward-vector mu:N->M mu^-1:M->N) v-on-N)
  (procedure->vector-field
   (lambda (f)
     (compose (v-on-N (compose f mu:N->M)) mu^-1:M->N))))

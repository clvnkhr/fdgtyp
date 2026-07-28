(define ((vector-field->vector-field-over-map mu:N->M) v-on-m)
  (procedure->vector-field
   (lambda (f-on-M)
     (compose (v-on-M f-on-M) mu:N->M))))

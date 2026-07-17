;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- (SR-star (Faraday 'Ex 'Ey 'Ez 'Bx 'By 'Bz)) (Maxwell 'Ex 'Ey 'Ez 'Bx 'By 'Bz))
             (literal-vector-field 'u SR)
             (literal-vector-field 'v SR))
            an-event))
;; => 0

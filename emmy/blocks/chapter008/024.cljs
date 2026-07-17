;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (let [omega (literal-oneform-field 'omega-sphere S2-spherical)]
            ((+ (omega ((nabla T) ((nabla T) U))) ((Riemann nabla) omega T U T)) m)))
;; => 0

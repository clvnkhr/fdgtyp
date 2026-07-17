;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (let [q (up (literal-function 'x) (literal-function 'y))
                f (literal-function 'f)]
            ((- (compose (Euler-Lagrange-operator L2) (Gamma (compose q f) 4))
                (* (compose (Euler-Lagrange-operator L2) (Gamma q 4) f) (expt (D f) 2)))
              't)))
;; => (down (+ (* ((D x) (f t)) (((expt D 2) f) t) (m_00 (up (x (f t)) (y (f t))))) (* ((D y) (f t)) (((expt D 2) f) t) (m_01 (up (x (f t)) (y (f t)))))) (+ (* ((D x) (f t)) (((expt D 2) f) t) (m_01 (up (x (f t)) (y (f t))))) (* ((D y) (f t)) (((expt D 2) f) t) (m_11 (up (x (f t)) (y (f t)))))))

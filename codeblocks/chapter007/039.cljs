;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (show-expression (((Lagrange-equations Lsphere)
                              (up (literal-function 'alpha) (literal-function 'beta)))
                             't)))
;; => (down
;;      (+ (* #emmy/bigint -1 (cos (alpha t)) (sin (alpha t)) (expt ((D beta) t) 2))
;;         (((expt D 2) alpha) t))
;;      (+ (* #emmy/bigint 2 (cos (alpha t)) (sin (alpha t)) ((D beta) t) ((D alpha) t))
;;         (* (expt (sin (alpha t)) 2) (((expt D 2) beta) t))))

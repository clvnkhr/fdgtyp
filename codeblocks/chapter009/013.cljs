(defn L1 [state] (sqrt (square (velocity state))))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((Lagrange-equations L1) (up (literal-function 'x) (literal-function 'y))) 't))
;; => (down
;;      (/ (+ (* -1 ((D x) t) ((D y) t) (((expt D 2) y) t))
;;            (* (((expt D 2) x) t) (expt ((D y) t) 2)))
;;         (+ (* (expt ((D x) t) 2) (sqrt (+ (expt ((D x) t) 2) (expt ((D y) t) 2))))
;;            (* (expt ((D y) t) 2) (sqrt (+ (expt ((D x) t) 2) (expt ((D y) t) 2))))))
;;      (/ (+ (* (expt ((D x) t) 2) (((expt D 2) y) t))
;;            (* -1 ((D x) t) (((expt D 2) x) t) ((D y) t)))
;;         (+ (* (expt ((D x) t) 2) (sqrt (+ (expt ((D x) t) 2) (expt ((D y) t) 2))))
;;            (* (expt ((D y) t) 2) (sqrt (+ (expt ((D x) t) 2) (expt ((D y) t) 2)))))))

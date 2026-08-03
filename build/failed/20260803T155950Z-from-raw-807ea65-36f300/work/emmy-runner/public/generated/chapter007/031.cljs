(define-coordinates t R1-rect)

(mapr (fn [omega]
        ((omega (((covariant-derivative sphere-Cartan gamma) d:dt) u_gamma))
          ((point R1-rect) 'tau)))
      (basis->oneform-basis basis-over-gamma))
;; => (up (+ ((D u↑0) tau)
;;           (* (- (* (sin (alpha tau)) (cos (alpha tau)))) ((D beta) tau) (u↑1 tau)))
;;        (+ ((D u↑1) tau)
;;           (* (/ 1 (tan (alpha tau))) ((D beta) tau) (u↑0 tau))
;;           (* (/ 1 (tan (alpha tau))) ((D alpha) tau) (u↑1 tau))))

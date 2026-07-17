(let [beta (up 'bx 'by 'bz)
      xi (make-four-tuple 'ct (up 'x 'y 'z))
      R (compose (rotate-x 'theta) (rotate-y 'phi) (rotate-z 'psi))
      R-inverse (compose (rotate-z (- 'psi)) (rotate-y (- 'phi)) (rotate-x (- 'theta)))]
  (- ((general-boost beta) xi)
     ((compose (extended-rotation R-inverse) (general-boost (R beta)) (extended-rotation R)) xi)))

;; Emmy's simplifier times out on this large result, so retain its unsimplified value.
;; => (up (- (* (/ 1 (expt (- 1 (+ (* bx bx) (* by by) (* bz bz))) 0.5)) (+ ct (* bx x) (* by y) (* bz z))) (* (/ 1 (expt (- 1 (+ (* (+ (* (cos phi) (- (* (cos psi) bx) (* (sin psi) by))) (* (sin phi) bz)) ... <result truncated: 47418 characters total; inspect in the web runner>

(proper-time-interval (- ((chart home) halfway-at-home-event) ((chart home) start-event)))
;; => (sqrt (expt (* c 25) 2))

(proper-time-interval (- ((chart outgoing) halfway-at-home-event) ((chart outgoing) start-event)))
;; => (sqrt (- (expt (* (/ 25 7) c 25) 2) (* (/ -24 7) c 25 (/ -24 7) c 25)))

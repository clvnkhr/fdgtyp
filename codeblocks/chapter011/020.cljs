(simplify (proper-time-interval (- ((chart outgoing) traveller-at-turning-point-event) ((chart outgoing) start-event))))
;; => (* 7 c)

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (proper-time-interval (- ((chart home) traveller-at-turning-point-event) ((chart home) start-event))))
;; => (* 7 c)

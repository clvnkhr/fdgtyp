;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify
  (+ (proper-time-interval (- ((chart outgoing) traveller-at-turning-point-event) ((chart outgoing) start-event)))
     (proper-time-interval (- ((chart incoming) end-event) ((chart incoming) traveller-at-turning-point-event)))))
;; => (* 14 c)

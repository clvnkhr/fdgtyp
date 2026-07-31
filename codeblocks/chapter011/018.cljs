;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (- ((chart outgoing) traveller-at-turning-point-event) ((chart outgoing) start-event)))
;; => (up (* #emmy/bigint 7 c) 0 0 0)

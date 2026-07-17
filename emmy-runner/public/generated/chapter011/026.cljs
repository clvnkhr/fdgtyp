;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (proper-time-interval (- ((chart home) home-at-outgoing-turning-point-event) ((chart home) start-event))))
;; => (* #emmy/ratio "49/25" c)

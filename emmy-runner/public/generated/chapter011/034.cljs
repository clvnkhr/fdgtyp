;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (proper-time-interval (- ((chart home) end-event) ((chart home) home-at-incoming-turning-point-event))))
;; => (* #emmy/ratio "49/25" c)

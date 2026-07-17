;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (- ((chart incoming) end-event) (make-SR-coordinates incoming (up (* 'c 7) 0 0 0))))
;; => (up 0 0 0 0)

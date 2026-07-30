(simplify (- ((chart incoming) end-event) (make-SR-coordinates incoming (up (* 'c 7) 0 0 0))))

(simplify (- ((chart home) end-event)
             ((chart home) ((point incoming) (make-SR-coordinates incoming (up (* 'c 7) 0 0 0))))))

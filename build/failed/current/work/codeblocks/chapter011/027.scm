(- ((chart incoming) end-event)
   (make-SR-coordinates incoming
                        (up (* :c 7) 0 0 0)))
;; (up 0 0 0 0)

(- ((chart home) end-event)
   ((chart home)
    ((point incoming)
     (make-SR-coordinates incoming
                          (up (* :c 7) 0 0 0)))))
;; (up 0 0 0 0)

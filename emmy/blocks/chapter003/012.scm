(define ((((evolution order) delta-t v) f) m)
       (series:sum
        (((exp (* delta-t v)) f) m)
        order))

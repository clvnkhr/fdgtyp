(series:for-each print-expression
                 ((((exp (* 'a (Lie-derivative Jz))) d:dy) (literal-manifold-function 'f-rect R3-rect))
                   ((point R3-rect) (up 1 0 0)))
                 5)

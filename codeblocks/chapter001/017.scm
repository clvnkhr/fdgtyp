(define metric-components
  (metric->components
   the-metric
   (coordinate-system->basis R2-rect)))

(- Lagrange-residuals
   (* (* 'm (metric-components (gamma ((point R1-rect) 't))))
      geodesic-equation-residuals))

(down 0 0)

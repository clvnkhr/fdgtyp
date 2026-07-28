(def Cartan
  (Christoffel->Cartan (metric->Christoffel-2 (Schwarzschild-metric 'M 'G 'c)
                                              (coordinate-system->basis spacetime-sphere))))

(defn geodesic-equation+X-residuals
  [eps X]
  (let [gamma (prime-meridian+X 'r eps X)]
    (((((covariant-derivative Cartan gamma) d:dtau) ((differential gamma) d:dtau)) (chart spacetime-sphere))
      ((point R1-rect) 't))))

(defn Lagrange-explicit
  [L]
  (let [P ((partial 2) L)
        F ((partial 1) L)]
    (/ (- F (+ ((partial 0) P) (* ((partial 1) P) velocity))) ((partial 2) P))))

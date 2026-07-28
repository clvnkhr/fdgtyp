(defn Ux [beta] (+ (* (/ 1 (sqrt (- 1 (square beta)))) d:dct) (* (/ beta (sqrt (- 1 (square beta)))) d:dx)))

((Force 'q F (Ux 'v:c) dy) an-event)
;; => (* -1
;;       q
;;       (+ (* (/ 1 (sqrt (- 1 (expt v:c 2)))) (Ey (up ct0 x0 y0 z0)) -1)
;;          (* (/ v:c (sqrt (- 1 (expt v:c 2)))) (Bz (up ct0 x0 y0 z0)))))

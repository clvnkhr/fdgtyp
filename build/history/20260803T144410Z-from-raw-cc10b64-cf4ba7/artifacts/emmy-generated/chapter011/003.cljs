(defn proper-time-interval
  [four-tuple]
  (sqrt (- (square (four-tuple->ct four-tuple)) (square (four-tuple->space four-tuple)))))

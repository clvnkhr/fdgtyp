(defn proper-space-interval
  [four-tuple]
  (sqrt (- (square (four-tuple->space four-tuple)) (square (four-tuple->ct four-tuple)))))

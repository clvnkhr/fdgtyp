(defn extended-rotation [R] (fn [xi] (make-four-tuple (four-tuple->ct xi) (R (four-tuple->space xi)))))

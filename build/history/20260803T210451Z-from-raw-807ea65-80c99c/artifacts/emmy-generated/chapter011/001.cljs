(defn make-four-tuple [ct space] (up ct (ref space 0) (ref space 1) (ref space 2)))

(defn four-tuple->ct [v] (ref v 0))

(defn four-tuple->space [v] (up (ref v 1) (ref v 2) (ref v 3)))

(defn sum? [expression] (and (pair? expression) (= (first expression) '+)))

(sum? '(+ 3 a))
;; => true

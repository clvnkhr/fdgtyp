(defn pullback-function [mu:N->M] (fn [f-on-M] (compose f-on-M mu:N->M)))

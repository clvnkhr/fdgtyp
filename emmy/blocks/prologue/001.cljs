(ns fdg.session
  (:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator])
  (:require [emmy.env :refer :all]
            [fdg.compat :refer :all]))

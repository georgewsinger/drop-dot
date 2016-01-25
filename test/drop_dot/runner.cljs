(ns drop-dot.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [drop-dot.core-test]))

(doo-tests 'drop-dot.core-test)

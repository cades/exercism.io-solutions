;;; hello-world.el --- Hello World Exercise (exercism)

;;; Commentary:

;;; Code:
(defun hello (&rest subject)
  (concat "Hello, " (or (car subject) "World") "!"))

(provide 'hello-world)
;;; hello-world.el ends here

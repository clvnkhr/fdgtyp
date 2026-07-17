(->tex-equation (simplify ((Lsphere 'm 'R) (up 't (up 'theta 'phi) (up 'thetadot 'phidot)))))
;; => "\\begin{equation}\n\\frac{1}{2}\\,{R}^{2}\\,m\\,{\\dot {\\phi}}^{2}\\,{\\sin}^{2}\\left(\\theta\\right) + \\frac{1}{2}\\,{R}^{2}\\,m\\,{\\dot {\\theta}}^{2}\n\\end{equation}"

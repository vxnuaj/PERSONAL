The means to estimate $f$ by iteratively selecting a set of parameters, $\theta$, and a structural basis for the function $f$ ( an assumption at first ). 

Involve 2-steps,

First is making an assumption of the adequate form of $f$ to model $Y$. A straightforward assumption is that $f$ is a linear model / function of $X$.

$f(X) = \theta_0 + X_1\theta_1 + X_2\theta_2 + ... + X_p\theta_p$

Now that there's a foundational basis for the estimation of $f$, one only needs to estimate $p+1$ parameters $\theta$ ( including a bias or intercept term, $\theta_0$ ).

Second is to construct a procedure and use such procedure to *fit* or *train* the model by iteratively adjusting $\theta$ to more accurately model $Y$ through $f$.

Find values of $\theta$ such that, $Y ≈ \theta_0 + X_1\theta_1 + X_2\theta_2 + ... + X_p\theta_p$.

In linear models, this is typically done through *ordinary least squares*.

> Though, can be estimated through other means such as [[gradient descent]]

Some issues that arise with these models is that they won't match the true form of $f$.

This can be mitigated via increasing the number of parameters, but then one risks overfitting to the training dataset.








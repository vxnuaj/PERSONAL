L1 regularization serves the same purpose as [[L2 Regularization]] with the difference being that rather than basing the penalty on the [[Euclidean Norm]], it's based on the [[Manhattan Distance]] that's multiplied by the $\lambda$ term.

The regularized loss is then calculated as:

$J(\hat{y}, y)_{regularized} = \frac{1}{n} \sum L(\hat{y}, y) + \lambda||w||_1$

Just like [[L2 Regularization]], it's another form of decaying weights with high values down to parameters of lower values. 

This then prevents overfitting and improves generalization of a model.

The regularized gradient descent (w.r.t to param $w$, assuming [[Categorical Cross Entropy Loss]]) is then defined as:

$\frac{∂J(\hat{y}, y)_{regularized}}{∂w} = (\frac{∂J(\hat{y}, y)_{regularized}}{∂z})(\frac{∂z}{∂w})$

$\frac{∂J(\hat{y}, y)_{regularized}}{∂w} = (A2 - Y)(X^T) + \lambda sign(w)$

$w = w - \alpha * \frac{∂J(\hat{y}, y)_{regularized}}{∂w}$

This form of regularization, encourages the parameters of a model to become sparse, optimizing for 0. 

This is as the gradient of the $J(\hat{y}, y)_{regularized}$ with respect to a parameter $\theta$ is undefined when a $\theta$ is equal to $0$.

Therefore, the update rule then becomes: $w = w - alpha$, ultimately driving $w$ to $0$ overtime.t
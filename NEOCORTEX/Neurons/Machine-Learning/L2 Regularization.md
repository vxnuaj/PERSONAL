L2 regularization, as [[Regularization]], involves the addition of a penalty term to punish large weights.;

The penalty term is based on the [[Euclidean Norm]] or [[Frobenius Norm]] squared, multiplied by a hyperparameter, $\lambda$.

L2 regularization can be often added to layers that are more prone to overfitting and may not need to be added to layers that aren't prone to it. This typically includes more dense layers with higher number of params.

The regularized loss is then calculated as:

> *Using [[Frobenius Norm]] notation, $||W|| = \sum_i \sum_j w_{ij}^2$*

$J(\hat{y}, y)_{regularized} = \frac{1}{n}\sum L(\hat{y}, y) + \frac{\lambda}{n}\sum_{l = 1}^L ||W||$

This is also known as weight decay, as when doing [[Gradient Descent]], a subset of the parameters will decay to smaller values given the introduction of the small value of $\lambda$.

Then, in [[Gradient Descent]], the implementation of regularized loss looks mathematically as (w.r.t to param $w$, assuming [[Categorical Cross Entropy Loss]]):

$\frac{∂J_{regularized}}{∂w} = (\frac{∂J}{∂Z})(\frac{∂Z}{∂W}) + 2\lambda||W||$

$\frac{∂J_{regularized}}{∂w} = (A - Y_{onehot})(X^T) + 2\lambda||W||$

$w = w - \alpha * \frac{∂J_{regularized}}{∂w}$

>*When computing the loss, you must take the squared euclidean norm of **all** weight matrices, not just only the output layer.*[^1]

Essentially, [[overfitting]] requires a set of large weights. An L2 regularized back propagation adds the additional $2\lambda||w||$ term to increase a gradient.

The larger $||w||$ is, the higher the gradient will be, therefore forcing a model to optimize for a narrower set of parameters. 

Yet, inadvertently, having a high $\lambda$ term, can lead to slower learning as the model isn't able to learn weights of high values that can map the data, given lack of opportunity to explore the weight space. 

	![[Screenshot 2024-06-04 at 4.29.33 PM.png | 500]][^2]

[^1]: Refer to `CCE` in `l2nn.py` in the Regularization folder.
[^2]: The loss will only be optimize to the 'compromise'
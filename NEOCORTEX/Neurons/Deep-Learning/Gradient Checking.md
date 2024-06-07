To check the a gradient (if it was applied correctly), you can compute the slope of the secant line between the given $\theta$ and $\theta + \epsilon$. 

But a better means to do so is to compute the slope of the secant line between $\theta - \epsilon$ and $\theta + \epsilon$.

It provides a better approximation of the gradient of $\theta$ as it averages the slope from both sides.

Going deeper, given the definition of a derivative (centered difference definition)

$f'(\theta) = \frac{f(\theta+h) - f(\theta-h)}{2\epsilon}$

is a better approximation of the true derivative of $\theta$ when compared to the forward difference definition:

$f'(\theta) = \frac{f(\theta + h) - f(\theta)}{\epsilon}$

This is as the error is $O(\epsilon ^2)$ in the secant line def. while the error is $O(\epsilon)$ making way for a more accurate approximation especially when it comes to computing the gradients of smaller values.

To gradient check for a Neural Network, you can:

1. Take all vectors of weights and biases $W$ and $B$ into a single vector, $\theta$
2. Take all vectors of the gradients of weights and biases $dW$ and $dB$ into a single vector, $d\theta$
3. Apply the centered difference definition of the derivative.
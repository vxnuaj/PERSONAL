To check the a gradient (if it was applied correctly), you can compute the slope of the secant line between the given $f(\theta)$ and $f\theta + \epsilon)$. 

But a better means to do so is to compute the slope of the secant line between $f(\theta - \epsilon)$ and $f(\theta + \epsilon)$.

It provides a better approximation of the gradient of $\theta$ as it averages the slope from both sides.

Going deeper, given the definition of a derivative (centered difference definition)

$f'(\theta) = \frac{f(\theta+h) - f(\theta-h)}{2\epsilon}$

is a better approximation of the true derivative of $\theta$ when compared to the forward difference definition:

$f'(\theta) = \frac{f(\theta + h) - f(\theta)}{\epsilon}$

This is as the error is $O(\epsilon ^2)$ in the centered difference definition, while the error is $O(\epsilon)$ in the forward difference definition, making way for a more accurate approximation especially when it comes to computing the gradients of smaller values.

To gradient check for a Neural Network, you can:

1. Compute the forward and backward pass for the original parameters
2. Compute the forward pass for the parameters, within a small $\epsilon$ value added to a single parameter & compute the loss
3. Compute the forward pass for the parameters, within a small $\epsilon$ value subtracted to a single parameter & compute the loss
4. Find the numerical approximation of the gradient using the centered difference definition of a derivative $f'(\theta) = \frac{f(\theta+h) - f(\theta-h)}{2\epsilon}$
5. Compare the difference by taking the $\frac{||grad - gradapprox||_2}{||grad||_2 - ||gradapprox||_2}$ or  $\frac{||grad - gradapprox||_2}{maximum(||grad||_2, ||gradapprox||_2)}$, if $grad$ is smaller than $gradapprox$ 
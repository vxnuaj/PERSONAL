#mathematics 

Back propagation updates parameters to a global minima of a given loss function through the calculation of the gradients of a [[Loss function]] with respect to specific parameters and an [[Update rule]].

The mathematics, in a simplified manner, can be defined as:

$gradient = \frac{∂L}{∂θ}$

$θ = θ - ⍺ * gradient$

The means of how we compute these gradients vary with the loss function and activation function we use.

When taking the gradient of the loss w.r.t. to a given $\theta$, the size of the update step depends on how large and how aligned each of the gradients are.

If the gradient vector has very large gradients that are aligned with each other in value, the step size will be large.

Check the following out for more details:
1. [[Mathematics of Backpropagation (MSE and Linear Regression)]]
2. [[Mathematics of Backpropagation (Sigmoid and Log Loss)]]
3. [[Mathematics of Backpropagation (Softmax / ReLU and Categorical Cross Entropy)]]
4. [[Mathematics of Backpropagation (Neural Network)]]
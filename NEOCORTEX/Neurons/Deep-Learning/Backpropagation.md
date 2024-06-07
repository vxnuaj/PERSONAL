#mathematics 

Back propagation updates parameters to a global minima of a given loss function through the calculation of the gradients of a [[loss function]] with respect to specific parameters and an [[update rule]].

The mathematics, in a simplified manner, can be defined as:

$gradient = \frac{∂L}{∂θ}$

$θ = θ - ⍺ * gradient$

The means of how we compute these gradients vary with the loss function and activation function we use.

Check the following out for more details:
1. [[Mathematics of Backpropagation (MSE and Linear Regression)]]
2. [[Mathematics of Backpropagation (Sigmoid and Log Loss)]]
3. [[Mathematics of Backpropagation (Softmax / ReLU and Categorical Cross Entropy)]]
4. [[Mathematics of Backpropagation (Neural Network)]]
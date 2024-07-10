#mathematics 

>*Reminder: The derivative of a matrix and it's original value, have the same dimensions*

Say we had a neural network of one hidden layer, and an output layer of one sample.

$W^1$, of dims $(n^1, n^0)$
$B^1$, of dims $(n^1, 1)$
$W^2$, of dims $(n^2, n^1)$ or $(1, n^1)$
$B^2$, of dims $(n^2, 1)$ or $(1, 1)$ 

where,

$n_x = n^0$, corresponding to total input features.
$n^1$, corresponding to number of neurons in hidden layer.
$n^2 = 1$, corresponding to number of neurons in the output layer

and the [[cost function]], defined as $J$ is:

$J(W^1, B^1, W^2, B^2) = \frac{1}{m}\sum_{i=1}^{m}L(\hat{y}, y)$

**The gradient descent is defined as:**

[[Forward propagation]]:

$Z_1 = W_1X + B_1$[^1]
$A_1 = g(Z_1)$

$Z_2 = W_2A_1 + B_1$[^1]
$A_2 = g(Z_2)$
$\hat{y} = A_2$

[[Backpropagation]]:

$\frac{∂J}{∂Z_2} = (\frac{∂J}{∂A_2})(\frac{∂A_2}{∂Z_2}) = A_2 - Y$

$\frac{∂J}{∂W_2} = (\frac{∂J}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂W_2}) = \frac{1}{m} (A_2 - Y)A_1^T$

$\frac{∂J}{∂B_2} = \frac{1}{m}\sum_{i=1}^m(\frac{∂J}{∂A_2})(\frac{∂A_2}{Z_2})(\frac{∂Z_2}{B_2}) =  \frac{1}{m}\sum_{i=1}^m A_2 - Y$

$\frac{∂J}{∂Z_1} = (\frac{∂J}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂A_1})(\frac{∂A_1}{∂Z_1}) = W_2^T \frac{∂L}{∂Z_2} * \frac{∂J}{∂A_1}$

$\frac{∂J}{∂W_1} = \frac{1}{m}(\frac{∂J}{∂Z_1})(\frac{∂Z_1}{∂W_1}) = \frac{1}{m}\frac{∂J}{∂Z_1}X^T$

$\frac{∂J}{∂B_1} = \frac{1}{m}\sum_{i=1}^{m}(\frac{∂J}{∂Z_1})(\frac{∂Z_1}{∂B_1}) = \frac{1}{m}\sum_{i=1}^{m}W_2 \frac{∂J}{∂Z_2} * \frac{∂J}{∂A_1} = \frac{1}{m}\sum_{i=1}^{m}\frac{∂J}{∂Z_1}$

- [ ] Add update rule
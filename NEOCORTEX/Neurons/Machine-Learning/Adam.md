 Adam, *Adaptive moment estimation*, is an extended version of [[Gradient Descent]], designed to improve training speeds in deep neural networks and converge quickly, making use of [[Momentum]] and [[RMSprop]], combined.

[[Gradient Descent]] with a fixed step size has the undesirable property in which it makes large changes to parameters with large gradients and small adjustments to parameters with small gradients.

We might not always want large changes to parameters with large gradients, we might want to be cautious at that point.

We might not always want small changes to parameters with small gradients, we might want to explore the space further and take slightly larger steps.

>_It all depends on the surface of the loss function_

So to compute Adam,

- Computing the first moment (exponentially weighted average of gradients): 
	- $m_t = \beta m_{t-1} + (1 - \beta) \frac{∂J(\theta)}{∂\theta}$
- Bias correcting the first moment: 
	- $\frac{m_t}{(1 - \beta^t)}$
- Computing the second moment (exponentially weighted average of the squared gradients)
	- $v_t = \ beta(v_{t-1}) + (1 - \beta)(\frac{∂J(\theta)}{∂\theta})^2$
- Bias correcting the second moment:
	- $\frac{v_t}{1 - \beta^t}$
- Adam's update rule:
	- $\theta = \theta - \frac{\alpha}{\sqrt{v_t + \epsilon}}(m_t)$

Then, you have 3 hyperparameters to tune:

1. Learning rate: $\alpha$
2. Momentum Term: $B_1$, typically initialized to $.9$
3. RMSprop Term: $B_2$, authors of the paper recommend to initialize to $.99$

Adam is typically used in mini-batch gradient descent, given an increase in oscillations of the loss and accuracy during, which Adam can help in mitigating.

![[Screenshot 2024-06-12 at 9.01.31 AM.png | 700]]
************


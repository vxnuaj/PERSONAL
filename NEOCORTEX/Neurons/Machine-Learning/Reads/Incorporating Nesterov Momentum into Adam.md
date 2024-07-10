---
undefined: 
File: Incorporating Nesterov Momentum into Adam
---
#researchpaper 

> *[Original Paper](https://cs229.stanford.edu/proj2015/054_report.pdf)*

## **Intro**

There are many means to which one can improve the performance of a neural network, as:
- Adding [[LSTM]] units rather than relying on simple recurrent units
- Improve initialization through [[Xavier Initialization]] or [[He Initialization]].
- Introducing sparsity through [[L1 Regularization]].
- Modifying the optimizer, i.e., [[RMSprop]].
- Attempting to use second order optimizers.

This paper introduces another means to do so, by introducing [[Nadam]].

## **Related Work**

### Momentum-based Algorithms

- *[[Gradient Descent]]* very simple well known and robust
- *Classical Momentum*, implementing a decaying gradient with a constant $\beta$ to exponentially average the gradients ( [[Exponentially Weighted Average]] ).
	- This accelerates the gradient updates when the gradients are relatively similar overtime, but slows down when a given gradient begins to fluctuate.
- *[[Nesterov Momentum]]*, where the update step takes advantage of a 'lookahead' to better estimate the optimal update step, proving to be better than [[Gradient Descent]], [[Momentum]], and Hessian-Free algorithms.[^1]

[^1]: Meaning other algorithms that don't compute the Hessian matrix ( a matrix of second-order partial derivatives )

### $L_2$ norm-based algorithms

- *[[AdaGrad]]*, scales the learning rate overtime, by accumulating the gradients through an $L_2$ norm, and then using that $L_2$ norm as a scaling factor of $\alpha$
	- The issue that comes with [[AdaGrad]], is that the accumulated gradients become so large that $\alpha$ continues to decrease overtime, becoming so small that it's incapable of updating the model parameters to a global optima of the loss surface.
- [[RMSprop]], serves as an improvement over [[AdaGrad]], as it computes the [[Exponentially Weighted Average]] of the gradients, until a given time step, rather than infinitely accumulating the past gradients as [[AdaGrad]] does.
	- This then allows the model to learn indefinitely as needed.
- [[Adam]], then combines the norm-based algorithms and the momentum-based algorithms to leverage the benefits of a more direct gradient update with an adaptive learning rate.
	- In the same paper, AdaMax is introduced which generalizes the [[Adam]] from a simple $L_2$ norm based update to an $L_{\infty}$ based update of the learning rate.
		- The same can be done to [[RMSprop]], generalizing the scaling factor to an $L_{\infty}$ based update, as is called MaxProp

## Applying NAG to Adam

- Ultimately, NAG can replace the first moment of [[Adam]], as:

	$\theta_{lookahead} = \theta - \beta *  v\theta_{t-1}$
	$a1, a2, z1, z2 = forward()$
	$∂J(\theta_{lookahead}) = backward(a1, a2, z1, z2)$

	$v\theta_t = \beta * v\theta_{t-1} + ( 1 - \beta) * ∂J(\theta_{lookahead})$
	$s\theta_t = \beta * v\theta_{t-1} + (1 - \beta) * ∂J(\theta_{lookahead})^2$

	$\theta_{t+1} = \theta_t - \frac{\alpha}{\sqrt{s\theta_t}} * v\theta_t$

- The same trick can be used in AdaMax, as:
	
	$\theta_{lookahead} = \theta - \beta *  v\theta_{t-1}$
	$a1, a2, z1, z2 = forward()$
	$∂J(\theta_{lookahead}) = backward(a1, a2, z1, z2)$

	$v\theta_t = \beta * v\theta_{t-1} + ( 1 - \beta) * ∂J(\theta_{lookahead})$
	$s\theta_t = max(\beta_2 \cdot s\theta_{t - 1 }, |∂\theta_t|)$
	
	$\theta_{t+1} = \theta_t - \frac{\alpha}{\sqrt{s\theta_t}} * v\theta_t$

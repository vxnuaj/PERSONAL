#researchpaper

> *[Paper](https://arxiv.org/pdf/1412.6980)*

**Intro**

- Gradient descent is an effective means for optimization central to success in machine learning / deep learning. 
- Yet there may be scenarios in which objective functions have sources of high noise, in cases where we need optimization techniques to mitigate these stochastic sources of noise.
- Such a scenario is [[Dropout]] regularization, where you introduce random noise due to the dropout of a random set of neurons.

- So Adam is used as a means to reduce the impact of this noise, to optimize the learning path
- Adam scales the step size of the parameters ($\alpha \cdot \frac{v_i}{\sqrt{s_i + eps}}$) based on the exponentially moving average of the past squared gradients, helping the algorithm and the learning path, be more smooth instead of oscillating widely.

- Adam can handle non stationary objective functions, making models with changing data distributions easier to train.
- Adam can also work well with sparse gradients, given that it averages the gradients rather than taking them at a given time step, $t$
- Adam scales the gradients based on the variability (second moment) to avoid random oscillations and adds momentum (first moment, the moving average of the gradients)
- It then performs step size annealing (scheduling) by reducing the step size as the first and second moment increase.

**Algorithm**

![[Screenshot 2024-06-12 at 9.32.54 AM.png | 500]]

If $f(\theta)$ is the noisy loss function, we're attempting to minimize the value of the loss w.r.t to $\theta$, hence reducing the original loss value thereby increasing model prediction accuracy.

> _The stochastic (random) nature might come from mini-batches or dropout, or other function noise_

So the algorithm computes the exponentially moving averages of the gradients, $m_t$ and the exponentially moving averages of the squared gradients, $v_t$.

- $m_t$ can be known to be the mean of the gradient
- $v_t$ can be known as the uncentered variance of the gradients.
- $\beta_1$ and $\beta_2$ can be known as the parameters that calculate the exponential decay rate of the moving averages

But the moving averages may be initialized to $0$, making them biased towards $0$ during initial time steps.

This can be mitigated through a bias correction, which is a division of the first / second moment term by $(1 - \beta)$.

Adam is defined as:

- Computing the first moment (exponentially weighted average of gradients): 
	- $m_t = \beta_1 m_{t-1} + (1 - \beta_1) \frac{∂J(\theta)}{∂\theta}$
- Bias correcting the first moment: 
	- $\frac{m_t}{(1 - \beta_1^t)}$
- Computing the second moment (exponentially weighted average of the squared gradients)
	- $v_t = \beta_2(v_{t-1} + (1 - \beta_2)(\frac{∂J(\theta)}{∂\theta})^2$
- Bias correcting the second moment:
	- $\frac{v_t}{1 - \beta_2^t}$
- Adam's update rule:
	- $\theta = \theta - \alpha(\frac{m_t}{\sqrt{v_t + \epsilon}})$

Within Adam's update rule, the effective step size, $\alpha(\frac{m_t}{\sqrt{v_t + \epsilon}})$ (call it $\delta_t$, has 2 upper bounds:

- $|\delta_t| ≤ \alpha \cdot \frac{(1 - \beta_1)}{\sqrt{1 - \beta_2}}$ if $(1 - \beta_1) > \sqrt{1 - \beta_2}$
- $|\delta_t| ≤ \alpha$ otherwise

Essentially, in the algorithm, the scaling factor $\sqrt{v_t}$ can be thought of as inversely proportional to an $L^2$ norm of the current and past gradient.[^1]

> *When we say that something is inversely proportional to another quantity, it means that as one quantity increases, the other decreases by a certain factor. In the context of the Adam optimizer:*
> 
> *The term $\sqrt{v_t}$​​ is inversely proportional to the $L^2$ norm of the smoothed (exponentially moving averaged) gradients.*
> 
> *This means that as the $L^2$ norm of the gradients increases, the term $\sqrt{v_t}vt$ decreases.*
> *Conversely, as the $L^2$ norm of the gradients decreases, the term $\sqrt{v_t}$ increases*

The $L^2$ norm based update rule can be generalized to an $L^p$ norm based update rule (thereby increasing the scaling exponentially factor by $p$), though can become unstable for larges values of $p$.

But when $p \rightarrow \infty$, a stable algorithm happens to emerge.

So then the algorithm, to replace the second moment becomes:

$v_t = \beta_2^p v_{t-1} + (1 - \beta_2^p)(|\frac{∂J(\theta)}{∂\theta}|)^p$

> *The $\beta$ value being raised to $^p$ in order to scale in accordance to the $^p$ raised gradients.*

and by taking the limit of $v_t$ to $\infty$,

![[Screenshot 2024-06-12 at 10.31.16 AM.png]]

the equation becomes:

$v_t = max(\beta_2 \cdot v_{t - 1 }, |g_t|)$

which can be used in the update step as:

$\theta_{t+1} = \theta_{t} - \eta\frac{m_t}{v_{t}}$

[^1]: woudl need to clarify this i got no idea what they meant now, i got confused.
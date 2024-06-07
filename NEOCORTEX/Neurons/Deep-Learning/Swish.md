Swish is an activation function proposed by a team of Google researchers in 2017.

Mathematically, it can be defined as:

$Swish(z) = z sigmoid(\beta z) = \frac{z}{1+e^{-\beta z}}$,

where $\beta$ is a tunable parameter. If set to $1$, $Swish$ is essentially a sigmoid multiplied by it's input.

In code, this can be defined as:

```
def swish(z, beta = 1)
	return z * (1/(1+np.exp(beta * -z)))
```

Swish has as range with a lower bound at $0$ but goes up to $\infty$ at it's upper "bound". 

Therefore, swish may potentially have an issue with dead neurons if high negative values become the input into swish.

Swish might also be prone to the vanishing gradient at values a little less than $0$, given a flatter gradient.

Being smooth, swish is differentiable across it's entire domain making numerical instability and the propagation of NaNs not an issue.

It is non-monotonic which can be useful in capturing non-linear relationships but detrimental during [[gradient descent]] as it may accidentally converge to a local minima.

It is less computationally efficient than [[sigmoid]] and the [[ReLU]] variants given the introduction of the [[sigmoid]] with a multiplication.

**Advantages**:
- The introduction of the parameter $\beta$ allows for it to be adaptable for different use-cases
- It is completely differentiable mitigating the issue of NaN values propagating through a model.
- Non-monotonicity can allow for swish to capture complex non-linear relationships in data.

**Disadvantages**
- Non-monotonicity may lead to the [[gradient descent]] getting stuck at a local minima rather than a global optima
- Less computationally efficient.
Scaled Exponential Linear Unit or SELU for short is an activation function, a remix of the [[ELU]] function, yet instead with $\lambda$ and $\alpha$ being fixed constants of approximately $1.0505$ and $1.6732$ respectively.

It is mathematically defined as:

$SELU(z) = \lambda \begin{cases}z, z > 0 \\ \alpha(e^z - 1), x≤ 0\end{cases}$

while in code this can be defined as:

```
alpha = 1.6732
lambda = 1.0505
selu = np.where(z > 0, lambda * (z), lambda*(alpha *(np.exp(z) - 1)))
```

The derivative can be mathematically defined as:

$SELU'(z) = \begin{cases} \lambda, z > 0 \\ \lambda \alpha (e^z), z ≤ 0\end{cases}$

The range of SELU is from $- \infty$ to $\infty$, it's unbounded range having effects of a lack of true [[sparsity]] which mitigates dead neurons.

It then also copes better with the [[Vanishing Gradient]] problem when compared to [[Sigmoid]] or [[Tanh]] given an unbounded range.

The function isn't completely smooth, not being differentiable at $z = 0$, similar to [[ReLU]] or [[Leaky ReLU]]. Mathematically, this means that it's use can bring about the propagation of NaN values in a model which can be detrimental during [[Backpropagation]]. Though, in practical code, this activation functions is written in a manner that ignores and bypasses this discontinuity fixing the problem.

Being monotonic, it allows for a smoother gradient descent, reducing the risk for a model to get stuck in a local minima and allows it to optimize for a global minima.

Out of all the [[ReLU]] variants, SeLU is the least computationally efficient, as it requires the exponential, $e$, and an additional multiplication.

Though the additional multiplication automatically normalizes a layer, reducing the need for a [[batch normalization]] layer which can be useful in certain contexts.

SeLU isn't commonly used yet, though can be promising for the hidden layers of a network.[^1]

**Advantages**
- No vanishing gradient problem
- Can't die, no dead neurons
- They learn faster and better than other activation functions without further processing (batch normalization)

**Disadvantages**
- More computationally expensive.


---


[^1]: To understand more, read [link](https://arxiv.org/pdf/1706.02515) for more details. eek, gotta know ur math lol.
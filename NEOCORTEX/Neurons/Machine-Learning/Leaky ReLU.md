Leaky ReLU is an activation function based on [[ReLU]] with the difference being that when $z < 0$, it has a small gradient rather than having a $0$ gradient.

Mathematically, it is defined as:

$LeakyReLU(z) = \begin{cases} z, z>0 \\ 0.01z, z<0 \end{cases}$

$LeakyReLU(z) = max(.01z, z)$

In code, this can be defined as:

```
leaky_relu = np.where(z > 0, z, (.01 * z))
```

The derivative of Leaky ReLU can be defined as:

$LeakyReLU'(z) = \begin{cases} 1, z > 0 \\ .01, z < 0 \end{cases}$

```
leaky_relu_grad = np.where(z>0, 1, .1)
```

The range of ReLU goes from $-\infty$ to $\infty$. Given this purely unbounded range, unlike [[ReLU]], it isn't prone to 'dead neurons'. Rather having a smaller gradient of .01 when $z < 0$, is allows for a model to learn despite outputting negative values, unlike [[ReLU]].

Given it's range, it can cope better with the vanishing gradient problem than [[Sigmoid]] or [[Tanh]].

Just like [[ReLU]], Leaky ReLU isn't smooth everywhere as it isn't differentiable when an input $z$ is equal to $0$. Mathematically, this discontinuity may post a problem. But inputs typically aren't $0$ given that the weighted sum involves a linear combination and the addition of a bias parameter. 

In code, this can also be easily bypassed with `np.where(z > 0, z, (.01 * z))`, where the discontinuity isn't factored in.

The function is strictly monotonically increasing with no abrupt changes in it's sign value. This then prevents the gradient descent from converging onto a local minima **rather** than a global one, allowing for effective learning over time.

Leaky ReLU is more computationally complex than [[ReLU]] given the addition of a multiplication but still way more computationally efficient than [[Sigmoid]] and [[Tanh]] given the absence of Euler's number, $e$.

Common use cases of ReLU include activations at the hidden layers of deep networks. It's lack of computational complexity, ability to cope with vanishing gradients, lack of extreme sparsity, and unbounded range make it an improved activation function for hidden layers.

**Advantages**
- Mitigates 'dead neuron' issue
- Near sparse activations when negative values are near $0$
- Mitigates [[Vanishing Gradient]]s
- More computationally efficient than [[Sigmoid]] and [[Tanh]]

**Disadvantages**
- Not differentiable at $0$ (but can be easily bypassed in code)
- Less computationally efficient than [[ReLU]]
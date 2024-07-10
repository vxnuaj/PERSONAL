#mathematics 

Tanh is an [[Activation Function]] (known as the hyperbolic tangent), which is defined as:

$tanh = \frac{e^z - e^{-z}}{e^z + {e^{-z}}}$

and code defined as:

```
tanh = (np.exp(z) - np.exp(-z)) / (np.exp(z) + np.exp(-z))
```

It's derivative can be defined as:

$= \frac{(e^z + e^{-z})(e^z - e^{-z})' - (e^z - e^{-z})(e^z + e^{-z})'}{({e^z + e^{-z}})^2}$

$= \frac{(e^z + e^{-z})^2 - (e^z - e^{-z})^z}{(e^z + e^{-z})^2}$

$= \frac{(e^z + e^{-z})^2}{(e^z + e^{-z})^2} - \frac{(e^z - e^{-z})^2}{(e^z + e^{-z})^2}$

$= 1 - tanh(z)^2$

The function and it's derivative looks as such:

![[Pasted image 20240512184920.png]]

**Characteristics:**

It's range is between, $-1$ and $1$ symmetric around the origin of $0,0$, which ends up yielding a steeper gradient than the [[Sigmoid]] function[^2].

The Tanh function is smooth and continuous everywhere, making it differentiable amongst it's entire range.

The smoothness enables [[Backpropagation]] to effectively compute the gradients and update a model's parameters without issues of numerical instability while the continuity enables a smooth [[Gradient Descent]] mitigating sudden and abrupt changes in the model parameters.

Being a monotonically increasing function, there are no abrupt changes in it's sign making the learning during [[Backpropagation]] smooth and interpretable.

The computational efficiency of tanh is a burden, requiring the computation of multiple 
 `np.exp`'s, more than [[Sigmoid]]. 

**Common use-cases:**

- Activations in the hidden layer of a neural network, to introduce non-linearity, though typically [[ReLU]] is favored as it's shown to train six times faster than tanh[^1]
- Gating mechanisms such as [[LSTM]]s or [[GRU]]s to control the flow of information within the network.

**Advantages**

1. The larger range between $-1$ and $1$ yields steeper gradients than the [[Sigmoid]] function allowing for faster learning and helps cope with the [[Vanishing Gradient]]
2. It's zero-centered meaning the sign value is balanced. Parameter updates are then more likely to point in the right direction rather than being biased to a specific value. This then also helps mitigate the vanishing gradient

**Disadvantages:**

1. Cannot represent a binary probability for binary classification.
2. Is still prone to vanishing gradients at the edges of $-1$ and $1$
3. Computationally more expensive

---

[^1]: https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf

[^2]: ![[Pasted image 20240512183720.png|300]]
#mathematics 

The sigmoid function is an [[Activation Function]] commonly used in neural networks to introduce non-linearity, mathematically defined as:

$σ(z) = \frac{e^z}{e^z + 1}$

$σ(z) = \frac{1}{(e^z + 1)(e^{-z})}$

$σ(z) = \frac{1}{(e^z)(e^{-z})+e^{-z}}$

$σ(z) = \frac{1}{1 + e^{-z}}$

$σ(z) = \frac{1}{1 + e^{-z}}$

and in code, defined as

```

sigmoid = 1 / (1 + np.exp(-z))

```

The function is shaped as an S-shaped curve, in the range of $0 < \hat{y} < 1$, one of it's use cases being to compute an output as a probability of an input belonging to a given class.

It's most commonly used in the output layer binary classification models or [[logistic regression]].

It's derivative can be defined as:

$σ(z) = \frac{e^z}{e^z + 1}$

$σ(z) = (1+e^{-z})^{-1}$

$σ'(z) = - (1 +e^{-z})^{-2}(-e^{-z})$

$σ'(z) = - \frac{-e^{-z}}{(1 +e^{-z})^{2}}$

$σ'(z) = \frac{e^{-z}}{(1 +e^{-z})^{2}}$

Sigmoid can be considered a smooth function, given that it's derivative is continuous for all real values of $z$, making it proper for using optimization algorithms such as [[Gradient Descent]].

It's also a monotonically increasing function, with no abrupt changes in it's sign value. This then allow for a model to better converge onto a global minima.

Regarding it's computational efficiency, given that it contains the exponential function, $e^z$, it's computationally expensive given that it requires *"hundreds of addition, subtraction, multiplication, and division instructions on a general-purpose CPU.*[^1]

**Advantages**

- Sigmoid is a good choice for binary classification. Given that it has a larger gradient at it's middle (around $x = 0$) and a smaller gradient at the edges, it will aim to converge to either 0 or 1 during [[Gradient Descent]], given it's range being between 0 and 1.
- Given that it's a smooth and continuous function, it'll provide for better learning during [[Backpropagation]]

**Disadvantages**
- Nearing $0$ and $1$, the gradient is very small. This becomes a problem in deeper networks, where to get the gradients of earlier layers through [[Backpropagation]] and the chain rule, we need to multiply the gradient of the output layers with earlier layers. Given that sigmoid yields a small gradient when it converges to near $0$ or $1$, the deeper we get into a network, the smaller a gradient will be then leading to slower learning.
- It's very computationally expensive given the use of Euler's number, $e$.
- Extremely prone to the [[Vanishing Gradient]] problem given the largest gradient of $.25$

[^1]: https://www.sciencedirect.com/topics/computer-science/sigmoid-function#:~:text=High%20computational%20complexity.,Thus%2C%20the%20computation%20is%20inefficient.
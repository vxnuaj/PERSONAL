#architecture 

1. **Don't Initialize $W$ to 0**
2. **Don't $W$ or $B$ to very large positive or negative values.**

When initializing parameters, it's never a good idea to initialize the weights, $W$, to 0. You can initialize the bias, $B$ to 0, but never $W$.

Initializing all the weights in $W$ to $0$ will lead to every neuron in the network computing the same function. During each weight update[^1], after each iteration, the weights in $W$ will be equivalent to each other. 

Each weight in $W$ will end up learning the same features and will fail to learn any meaningful representations of a dataset.

It's always better to initialize $W$ to randomly assigned parameters, typically using `np.random.randn()`[^2].

>*In the context of [[Machine-Learning]], making use of `np.randn` to initialize weights, $W$, given the initialization through a normal distribution, helps the weights avoid the extremes of the [[Sigmoid]] function which allows for faster convergence as the model learns meaningful representations of data faster.*
>
>*Initializing with `np.rand` would put a huge portion of the weights at the extremes of [[Sigmoid]], near $0$ or $1$, at which the gradient of the loss with respect to the parameters, would be very flat leading to slower convergence.[^2]*

It's also a never good idea to initialize $W$ or $B$ to very large vales. In context of the [[Sigmoid]] or [[Tanh]] function, initializing the weights to large values such as $1000$ will increase the probability that the [[weighted sum]], $Z$ becomes a very large as well. Inputting $Z$ into the [[Sigmoid]] or [[Tanh]] function will then lead to slower rates of convergence as the gradient of the activation function will turn to be very **small**.

[^1]:   : $θ = θ - ⍺ * \frac{∂L}{∂θ}$, see [[Update rule]]

[^2]: See, [[np.rand vs np.randn]]
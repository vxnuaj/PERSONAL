Exploding Gradients are the phenomenon that occur during backpropagation in deep networks where if the gradients are consistently slightly above $1$, given the multiplicative nature of the chain rule in backpropagation, the gradients of the first layer will become an exponentially larger making it difficult for earlier layers to converge onto the correct set of parameters, causing them to overshoot.

As an example,

A network of 10 Layers

$\frac{∂L}{∂W_1} = (1.5)(1.5)(1.5)(1.5)(1.5)(1.5)(1.5)(1.5)(1.5)(1.5)$
$\frac{∂L}{∂W_1} = 57.6650390625$ 

The gradient, $\frac{∂L}{∂W_1}$ is extremely small making the weight update extremely small despite a model being not near the optimal parameters.

$W_1 = W_1 - alpha \cdot \frac{∂L}{∂W}$

If $\alpha$ is .1 and $W_1$ is $.8$

$W_1 = .8 - .1 \cdot 57.6650390625$
$W_1 = .8 - 5.76650390625$
$W_1 = -5.68650390625$

A larger weight update which then propagates through the layers of the deep network through the next forward pass, causing incorrect predictions, instability, NaN's or Infs.
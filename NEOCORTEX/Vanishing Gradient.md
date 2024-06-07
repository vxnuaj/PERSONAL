Vanishing Gradients are the phenomenon that occur during backpropagation in deep networks where if the gradients are consistently slightly less than $1$, given the multiplicative nature of the chain rule in backpropagation, the gradients of the first layer will become an extremely small number making it difficult for earlier layers to learn.

As an example,

A network of 10 Layers

$\frac{∂L}{∂W_1} = (.5)(.5)(.5)(.5)(.5)(.5)(.5)(.5)(.5)(.5)$
$\frac{∂L}{∂W_1} = 0.0009765625$ 

The gradient, $\frac{∂L}{∂W_1}$ is extremely small making the weight update extremely small despite a model being not near the optimal parameters.

$W_1 = W_1 - alpha \cdot \frac{∂L}{∂W}$

If $\alpha$ is .1 and $W_1$ is $.8$

$W_1 = .8 - .1 \cdot .0009765625$
$W_1 = .8 - 0.00009765625$
$W_1 = 0.79990234375$

A really small weight update.

A similar thing can be said for [[Exploding Gradients]], when a gradient is significantly above 1 in a very deep network.

This issue can be particularly significant in [[Sigmoid]] or [[Tanh]] activation functions given that their derivative becomes extremely small (or essentially $0$) once the input is less than $-4$ or exceeds $4$.[^1]

[^1]: Especially in [[Sigmoid]] where the largest gradient can only be $.25$
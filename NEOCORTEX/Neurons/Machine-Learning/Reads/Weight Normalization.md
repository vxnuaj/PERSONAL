Weight normalization is a means to increase the speed and stability of training a neural network by normalizing a set of weights down to a given scale, to mitigate [[Exploding Gradients]].

It does so by *reparameterizing* a set of weights, $w$, through a trainable vector $v$ and a trainable scalar $g$.

$w = \frac{g}{||v||_2} \cdot v$




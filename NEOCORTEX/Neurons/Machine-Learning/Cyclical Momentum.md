Cyclical momentum is a means of cycling the momentum hyperparameter during training a model in accordance with cycles used during a [[Cyclical Learning Rate]].

Typically, the larger the learning rate gets, the more the momentum should decrease in accordance to it to maintain stability in the learning process.

The reason that is done so, is to allow for larger bounds of the learning rate. If momentum wasn't decreased overtime, the maximum bounds for the learning rate would have to be lower to allow for stable training.

![[Pasted image 20240610114326.png]]

> *Learning rate on the left, Momentum on the right.*

Cyclical momentum can be implemneted as:

$\beta = \beta_{min} + (\beta_{max} - \beta_{min})x$

where $x$ is:

$x = |\frac{epochCounter}{cycle_{size}} - 2(cycle) + 1|$

used to modulate the learning rate with the given cycle of the cyclical learning rate schedule.

This is where $\alpha$ is the original step size / learning rate and $cycle$ can be defined as:

$cycle = floor(1 + \frac{epochCounter}{2(cycle_{size})})$[^1

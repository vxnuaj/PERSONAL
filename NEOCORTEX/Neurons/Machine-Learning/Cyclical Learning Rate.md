*****> [Paper](https://arxiv.org/pdf/1506.01186)*

A cyclical learning rate is a learning rate schedule that varies between minimum and maximum bounds.

These minimum and maximum bounds are set based on a conjecture of what the optimal learning could be.

The idea is that while the learning rate cycles between the minimum and maximum bounds, it'll spend some time above and below the optimum learning rate, and a good amount of time right around the optimum learning rate.

The general learning rate schedule, for a triangular learning rate policy, can be defined as:

$\eta = \eta_{min} + (\eta_{max} - \eta_{min})(max(0 , 1-x))$

where $x$ is:

$x = |\frac{epochCounter}{cycle_{size}} - 2(cycle) + 1|$

used to modulate the learning rate with the given cycle of the cyclical learning rate schedule.

This is where $\alpha$ is the original step size / learning rate and $cycle$ can be defined as:

$cycle = floor(1 + \frac{epochCounter}{2(cycle_{size})})$[^1]

used to specify the number of iterations (or epochs) it takes for the learning rate to go from the minimum to maximum value.

In essence:

- $epochCounter$ is the current number of iterations (not purely epochs, unless you're doing full batch descent)
- $cycle_{size}$ is the number of epochs prior to completing a single cycle (from $n_{min}$ to $\eta_{max}$ or vice versa)

This cyclical learning rate can help a model escape local minima, explore different regions of the loss space, and may reduce the need for tuning the learning rate through exhaustive methods such [[Grid Search]].

This method can be combined with applying [[Exponential Decay]] to the general minimum and maximum bounds, to allow the model to grow or shrink it's learning rate in an exponential manner while still using a cyclical method.

We can implement cyclical learning rate and grow it to a maximum over a period of time, to then gauge what the maximum possible learning rate can be for a given model. 

	![[Screenshot 2024-06-10 at 10.35.27 AM.png | 400]]

Then at the point at which the accuracy begins to decrease, can serve as the maximum bound of the learning rate whilst the point at which the accuracy begins to increase can serve as the minimum bound for the learning rate.

> *This is known as the learning rate range test*

This cyclical learning rate, if used in combination with a type of momentum from [[Momentum]], [[RMSprop]], or [[Adam]], can be paired with [[Cyclical Momentum]], to further allow for a more robust learning rate schedule to maintain training stability.

![[Pasted image 20240610114326.png | 600]]

> *An example of [[Cyclical Momentum]] and [[Cyclical Learning Rate]]s, particularly when leveraging [[Superconvergence]].
> 
> Learning rate on the left, Momentum on the right.*

This cyclical learning rate can also be leveraged to allow [[Superconvergence]] where a model reaches the optimum faster due to the fluctuating learning rate.


[^1]: Where the floor(x) function rounds a given x value to the nearest integer less than or equal to the x value
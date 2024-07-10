A rudimentary version of [[RMSprop]], which aims to accumulate a set of gradients, $\theta$, to then scale down the learning rate, $\alpha$, over time.

Unlike [[RMSprop]], the gradients aren't able to iteratively adjust, even when they become large once more in the latter stages of training.

Instead, the gradients continue to accumulate making $\alpha$, increasingly small as more iterations accumulate.

It's defined as:

$v\theta_t = v\theta_{t-1} + ∂\theta^2$
$\theta_{t+1} = \theta_{t} - \frac{\alpha}{\sqrt{v\theta_t}} * ∂\theta$

The scaling term, $\sqrt{v\theta_t}$, can essentially be seen as an $L_2$ norm of the gradients up until the given time step.

> *See [[Euclidean Norm]]*

[[RMSprop]] is a better alternative to AdaGrad, as it can adaptively scale the learning rate through an [[Exponentially Weighted Average]], rather than increasing it's magnitude overtime without stop.
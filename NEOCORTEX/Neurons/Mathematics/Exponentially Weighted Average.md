 Exponentially weighted averages is a type of [[Moving Average]] with the weights, $W$, exponentially decreasing as datapoints get older rather than linearly decreasing or being arbitrarily assigned. 

It's formula is computed as:

$V_t = \beta V_{t-1} + (1 - \beta) d\theta_t$

The lower $\beta$ is, the less averaging there is present and the more priority the EWA gives to more recent datapoints allowing for more accuracy with a downside of less smoothing and increasing amount of random noise.

The higher $\beta$ is, the more smoothness it has

> *In deep learning, this essentially means that the higher $\beta$ is, the more affected a current gradient is by previous gradients (see [[Momentum]])*

This is as the number of points the smoothness factor is averaging over is determined by the the factor, $\frac{1}{1-\beta}$.

If $\beta$ is equal to $.90$, then $\frac{1}{1 - \beta} = 10$, so we're averaging over approximately $10$ datapoints at a time over an entire dataset.

	![[Screenshot 2024-06-08 at 9.11.07 AM.png | 500]]

If for example, we were computing the EWA of $V_{10}$ within a set of 10 datapoints, with a $\beta$ value of $.95$ it'd look as such:

$V_{10} = (.05)\theta_{10} + (.95)V_{9}$

$V_{10} = (.05)\theta_{10} + (.95)(.05(\theta_9) + (.95^2)V_8)$

$V_{10} = (.05)\theta_{10} + (.95)(.05(\theta_9) + (.95^2)(.05(\theta_8) + (.95^3)V_7))$

each $V_n$ having it's own EWA calculation, with the $\beta$ value exponentially decreasing as older datapoints are presented.

To avoid a type of bias when calculating the EWA, you can first compute the original EWA and then take $V_t$ and apply the following equation:

$v_{t} = \frac{v_t}{1-\beta^t}$

>*Though in practice, most (within deep learning), don't bother to implement the bias correction as the EWA "warms-up" after just a couple of iterations.*

To then feed the corrected $V_{t}$ into the original equation once more for the next datapoint:

$V_t = \beta V_{t-1} + (1 - \beta) \theta_t$
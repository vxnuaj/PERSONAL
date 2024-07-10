****RMSprop**, serving a similar purpose as [[Momentum]], computes the [[Exponentially Weighted Average]]s of gradients, with the difference that within the computation the $\theta$ value is squared and the division during the weight update.

The equation is as:

>_where $\beta$ is the smoothing parameter and $\theta$ is a given gradient.

$S_{d\theta} = \beta S_{d\theta - 1} + (1 - \beta) d\theta_t^2$

Then during the weight update, the gradient of $d\theta$ is divided by $S_{d\theta}$ as:

$\theta = \theta - \alpha (\frac{d\theta}{\sqrt{S_{d\theta} + \epsilon}})$

with an added $\epsilon$ to avoid a division by $0$.

> _By the way, the bias correction, the division by $\frac{1}{1 - \beta}$, isn't needed_

So, in the above equations, the larger $d\theta$ is, the larger $S_{d\theta}$ becomes

> _per $S_{d\theta} = \beta S_{d\theta - 1} + (1 - \beta) d\theta_t^2$_

therefore in the weight update, the smaller the adjusted gradient becomes due to the division by a large $S_{d\theta}$, ultimately changing the unneeded oscillations in the learning path, optimizing for faster and more direct learning.

In a sense, this is a form of adapting the learning rate in accordance to the size of the exponential weighted averages of the gradients. The denominator, $\sqrt{S_{d \theta} + \epsilon}$  acts as a type of scaling factor for the learning rate.

This type of scaling factor increases as the ewa's of the gradient gets consistently smaller

If the exponentially weighted average of the squared gradients for given $\theta$ is large, the learning rate for the given $\theta$ is reduced. The inverse is true for smaller values of $\theta$.

Keep note that RMSprop is more sensitive to the choice in learning rates, where higher learning rates tend to cause more instability in the training process.[^1]

(red is the optimized learning path, while black is the unoptimized learning path)

![[Screenshot 2024-06-08 at 4.29.23 PM.png | 300]]

[^1]: Tested empirically and this appears to be true. Luckily, this also means we can learn faster if we optimize the learning rate to the right value.
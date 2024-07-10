### **First Definition:**

$v\theta_t = \beta(v\theta_{t -1 }) + (1-\beta)*∂\theta_t$

$\theta = \theta + \alpha *  v\theta_t$

In this definition, the first portion, $\beta(v\theta_{t-1})$, scales the previously accumulated ( through [[Exponentially Weighted Average]]s ) gradients by a factor of $\beta$.

The second portion, $( 1 - \beta ) * ∂\theta_t$, scales the current gradient by a factor of $( 1 - \beta)$.

This definition allows for a more intuitive approach of how we want the current gradient and past accumulated gradients to impact the step size.

### Second Definition:

$v\theta_t = \beta(v\theta_{t -1 }) + ∂\theta_t$

$\theta = \theta + \alpha * v\theta_t$

This definition is the same as the first, but doesn't apply a scaling factor of $(1-\beta)$ to the current gradient, which can ultimately cause values of $v\theta_t$ be of larger size, causing the  step size of the weight update to be larger, when compared to the first definition.

This accelerates training, if the $\alpha$ is maintained as when using the 1st definition, but can be unstable if $\alpha$ is too big.

### Third Definition:

$v\theta_t = \beta * v\theta_{t-1} - \alpha * ∂\theta_t$

$\theta = \theta + v\theta_t$

If rewritten, it can be broken down to:

$\theta = \theta + \beta * v\theta_{t-1} - \alpha * ∂\theta_t$

where $\beta * v\theta_{t-1}$ is taking a portion of the past gradient and adding it to $\theta$ and then $\alpha * ∂\theta_t$ is subtracted from $\theta$.

Given that $v\theta_{t-1}$ at the first step is $0$, the $-$ term in the definition of momentum scales $\theta$ in the direction of the local minima, whether $∂\theta_t$ is positive or negative.

If the gradient was positive, we'd want to decrease the size of $\theta$, so the $-$ does that so.

Inversely if the gradient was negative, we'd want to increase the size of $\theta$, so the $-$ inverts the sign and does that so.

> *This is more as intuition, in a 2 dimensional space. In real scenarios, things get more complex.*
Gradient Clipping can be a means to mitigate the risk of exploding gradients, through *clipping* larger values of a gradient vector or matrix, it's clipping threshold being denoted by a variable $k$.

This can be done through **value clipping** and **norm clipping**.

**Value clipping** involves ridding of any value which is larger than $k$, from the original gradient vector / matrix, and then setting it equal to $k$.

$clip(\frac{∂L∂\theta}{∂\theta}, k)$

It's pretty simple and straightforward.

But a disadvantage of gradient clipping is that it can change the direction of the gradient of the given vector or matrix, which may cause training instability, as the updates might not be fully representative of the true gradient.

For intuition, this is as some values of the gradient along a $y$ axis, that is $∂y$, might be larger than values of $∂x$. 

> *Just intuition, higher dimensional spaces are harder to visualize*

Therefore, when values of $∂y$ become larger than $k$, some may be clipped while still values of $∂x$, may not be as they might not exceed $k$.

Therefore, this changes the magnitude of the gradient vector or matrix disproportionately, leading to a change in the direction of the overall gradient.

A means to mitigate this is to use **norm clipping**, where the gradients are scaled proportionately.

Here, if the $L_P$ norm (magnitude) of a gradient exceeds the value of $k$, all gradients would be scaled down in a proportional manner. 

For intuition, if I had a gradient $∂y$ exceeding the value of $k$, while $∂x$ doesn't, $∂y$ would be scaled down as well a $∂x$, in a proportional manner, as long as the $L_P$ norm of the given gradient vector or matrix exceeds the value of $k$.

This is done as:

$\frac{\frac{∂L\theta}{∂\theta}}{||\frac{∂L\theta}{∂\theta}||} \cdot k$

where $||\frac{∂L\theta}{∂\theta}||$, is an $L_P$ norm to measure the magnitude of the gradients. The multiplication by $k$, ensures that we scale the gradients to the intended scale. 
Gradient Descent with Momentum involves computing an exponentially weighted average of our gradients and then use that average to update our weights.

It's used when dealing with high curvature (implying lots of local minima), small consistent gradients (implying slow learning), or noisy gradients (where values heavily oscillate)

Say we had the surface of the loss function as such:
	
![[Screenshot 2024-06-08 at 3.27.08 PM.png]]

and we began to optimize towards the global optima (the red dot)
	
![[Screenshot 2024-06-08 at 3.27.40 PM.png]]

The problem posed here is that to speed up learning, you can't introduce a larger learning rate as that may cause the learning path to further oscillate vertically ultimately slowing down learning.[^1]

What you want is a means to be able to learn *horizontally* towards the optima faster while maintaining a slower *vertical* rate of learning.

So you can implement what's called momentum, which is based on [[Exponentially Weighted Average]]s

	1. Compute the original gradients, $\frac{∂L}{∂W}$ ($dw$) and  $\frac{∂L}{∂Bm}$ ($db$)

2. Compute the [[Exponentially Weighted Average]]s 
	$vdw = \beta vdw + (1 - \beta)dw$
	$vdw = \frac{vdw}{1 - \beta^t}$
	
	$vdb = \beta vdb + (1 - \beta)db$
	$vdb = \frac{vdb}{1 - \beta^t}$
	

	>*Making use of $vdw = \beta{vdw} + \alpha \cdot dw$ works just as fine, though tuning the $\beta$ and $\alpha$ can differ slightly[^3].
	>
	>You can also introduce the multiplication by $\alpha$ after the initial calculation of $vd\theta$ which can be more useful in explicitly separating the $\alpha$ from $\beta$. Again tuning $\beta$ and $\alpha$ differs when using either.
	>
	>Also, a $vd\theta$ param is typically called the "velocity" term.[^2]

3. Update the weights per:
	$w = w - alpha \cdot vdw$
	$b = b - alpha \cdot vdw$

There's an alternative means of computing, it as:

$vdw = \beta vdw - \alpha dw$
$w = w + vdw$

> *It's typically best to set $\beta$ to the highest value possible without damaging the learning process.*

Essentially, just as is done in [[Exponentially Weighted Average]]s, we're computing the exponential average of the gradients and using it as a means to update our weights, which then tends to mitigate the *vertical* oscillations in the learning path.

You want to increase the $\beta$ value when your training loss or accuracy fluctuates wildly in an uncontrolled manner. Then the [[Exponentially Weighted Average]] smooths out your gradients.

You'd want decrease your $\beta$ value when your model accuracy or loss stagnates and stops improving, which then might mean that the model is relying on past gradients too much. Reducing makes the updates more responsive to the gradients at the current epoch / iteration.

	![[Screenshot 2024-06-08 at 3.48.45 PM.png | 400]]

As can be noticed there, the `ewa` (blue) or the [[Exponentially Weighted Average]]d values have less vertical oscillations than the original `data` (orange).

So we're not updating our weights based on the gradients, but on the [[Exponentially Weighted Average]]d gradients.

So, when implementing this, you now have 2 hyperparameters of 
- Learning rate $\alpha$
- $\beta$ which manages the [[Exponentially Weighted Average]]

[^1]: Momentum helps out as such (red with momentum):

	 ![[Screenshot 2024-06-08 at 4.29.23 PM.png | 300]]

[^2]: In physics, momentum, $p$, is the product of mass ($m$) times velocity ($v$). In GD with momentum, we assume unit mass where $m = 1$, therefore the momentum, $m$ is equal to velocity, $v$, as  $p = v$ so we can use the velocity vector as momentum.
[^3]: See here -> [[Interpretations of Momentum]]]
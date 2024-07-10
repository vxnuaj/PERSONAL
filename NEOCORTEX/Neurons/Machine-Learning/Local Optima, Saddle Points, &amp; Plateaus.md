In deep learning, local optima is referred to as points within the surface of the [[Loss function]], where all the gradients of the loss with respect to a set of parameters, $\theta$, become the optimum for that given point at a $0$ gradient.

This then becomes an issue as we want to completely minimize the loss function by hitting a global optima, not the local optima.

Though, the likelihood, especially in higher dimensional neural networks, say for example a model with a parameter size of $5000$, of hitting a local minima is fairly low as all $5000$ parameters would have to reach a gradient of $0$.

Then, there's a higher likelihood of reaching what's called saddle points, where some are sparse while others are not. 

![[Screenshot 2024-06-12 at 12.13.17 PM.png | 400]]

These saddle points tend to slow down learning and make the accuracy / loss value oscillate, yet don't completely prevent a model from iterating it's parameters.

Another issue are plateaus which can slow down learning. In plateaus, weight updates might remain stuck on the plateau until a gradient, say for $\theta_1$, is minimized to $0$. Then the model might escape the plateau by updating based on the gradient of $\theta_{18}$.

> _This is more intuition and not truly representative of training, but serves are good intuition for how it works._

![[Screenshot 2024-06-12 at 12.18.18 PM.png]]

[[RMSprop]], [[Adam]], AdaMax, and other optimization techniques are then designed to help escape these saddle points or plateaus by increasing the learning rate as gradients decrease over time (using exponentially weighted averages).
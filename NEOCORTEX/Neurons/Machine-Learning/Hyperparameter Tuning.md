Hyperparameter Tuning is the process of experimenting with the value of a set of hyperparameters in an attempt to find the optimal design for a neural network.

The means in which you optimize your hyperparameters can heavily vary per context 

>*(i.e., if you're using [[RMSprop]] or [[Adam]], or if you've introduced [[Learning Rate Decay]] or [[Cyclical* Momentum]] / [[Cyclical Learning Rate]])

though there are some general guidelines to do so:

1. The type of optimizer is key as most of your hyperparameters will depend on it.

2. Tuning your learning rate is important as most is dependent on it.

3. Afterwards, the mini-batch size and number of hidden units / layers can come into play into deciding how accurate or fast your neural network learns.

5. When the model is pre-trained you can gauge if you need to schedule your learning rate and by how much.

You can search a hyperparameter space using [[Grid Search]] or [[Random Search]].

It's important to consider the distribution / scale at which to search your hyperparameters, when using [[Grid Search]] or [[Random Search]].

In some scenarios, choosing values randomly, uniformly, under a given range can be reasonable.

But in other scenarios, this isn't a rational approach, as for example searching for an optimal learning rate.

For example is you suspect your learning rate is between $.0001$ and $1$, it'd make more sense to search for your optimal $\alpha$ on the log scale.

![[Screenshot 2024-06-12 at 2.31.03 PM.png]]

(shown in the below image (2))

otherwise, you'd primarily be sampling over values between $.1$ and $1$, missing more of the values between $.0001$ and $.1$.

There are also many ways to test hyperparameters, you can either do so in parallel by training multiple models with different hyperparameters or 'baby' your model to the loss surface while iteratively adjusting hyperparameters.

This is more dependent on what type of model you have, your dataset size, and the corresponding computational power that is present.

Learning Rate decay serves as a means to 'decay' the learning rate or shrink it's value over a period of training time.

Large oscillations may be present, due to the nature of [[Mini-Batch Gradient Descent]], while they might be slightly beneficial in the beginning, to explore the search space, when converging to the optimal set of weights this can cause a model to overshoot.

Learning rate decay then can mitigate the overshooting phenomenon by tuning down the learning rate as the model begins to converge onto the minima allowing for more precision.

These are common methods to decay the learning rate:

1. [[Exponential Decay]]
2. [[Halving]]
3. [[Inverse Decay]]
4. [[Cyclical Learning Rate]]

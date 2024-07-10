You typically want to normalize your inputs to improve model stability, decrease complexity of the problem, decrease biased weights, which can potentially increase accuracy and/or increase training speed. 

To visualize, the space of an non-normalized loss function looks like:
	
	![[Screenshot 2024-06-04 at 1.54.07 PM.png | 300]]

It's clear that the space of the function isn't uniform in variance and takes on a wider set of values. 

When doing [[Gradient Descent]], this can result in biased weights, where the parameters converge onto values of different scales.

This then leads to poorer performance during inference and increases complexity of a model thereby increasing computation time.

You'd also need to use a smaller learning rate to ensure that your model doesn't oscillate and overshoot. It allows for us to deal with larger gradients without stability issues. We'd also avoid exploding gradients during [[Backpropagation]]. 

While the normalized space of a loss function looks like:

![[Screenshot 2024-06-04 at 2.01.18 PM.png | 300]]

Here, the parameters of a model aren't as biased to high values (given a normalized range of lower values and a reduced variance). Thereby we avoid exploding gradients and oscillations in the optimal parameters.

We can have a higher learning rate as reaching the minima is more straightforward, with lower risk of exploding gradients, which then decreases computation time.

This then can lead to better performance during inference in a decreased amount of training time.

Then typically, you want to normalize the range of all your inputs and decrease their variance to a similar scale to retain uniformity and allow the network to learn faster.

Some normalization methods include:

1. [[Z-Score Normalization]]

It's also important to make sure you normalize your inputs the same way during training and testing.
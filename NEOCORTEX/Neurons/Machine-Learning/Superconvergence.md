> *[Paper](https://arxiv.org/pdf/1708.07120)*

Super Convergence is essentially a method where we can train a neural network orders of magnitude faster than traditional training methods, due to the use of a [[Cyclical Learning Rate]] and a [[1cycle Learning Rate Policy]].

Super Convergence begins with making use of the [[Learning Rate Range Test]], where a [[Cyclical Learning Rate]] is used in order to find the minimum and maximum values of your learning rate

Here, the learning rate begins at 0 or a very small value, then to be increased linearly over a set of pre-training runs. 

As the learning rate is increased, the learning rate at which the accuracy of a given neural network begins to increase is defined as $n_{min}$ while the learning rate at which the accuracy of a given neural network begins to decrease is defined as $n_{max}$.

![[Screenshot 2024-06-10 at 11.07.47 AM.png | 400]]

You can take $n_{max}$[^2] and divide it by a factor of $3$ or $4$ to get the initial learning rate (replacing $n_{min}$ for the use-case of super convergence)[^1]

These bounds of the learning rate, $n_{min}$ and $n_{max}$ are then used as bounds of the [[1cycle Learning Rate Policy]].

> *The optimal learning rate for a model would typically fall between one of these bounds*

The process behind the [[1cycle Learning Rate Policy]] is

1. Begin with $\eta_{min}$ as the learning rate, typically set several orders of magnitude lower than $\eta_{max}$
2. Linearly (or exponentially) increase the $\eta$ to $\eta_{max}$[^3]
3. Linearly (or exponentially) decrease the $\eta$ to $\eta_{min}$
4. Decrease the $\eta$ to several orders below $\eta_{min}$

> *The intuition behind this lies in that initially, (1) we need a smaller learning rate to allow for the learning path to begin to converge, yet as the model begins to converge, (2) a faster learning rate could be used to allow for faster learning. Then once the model traverse the loss space at a faster rate, (3) decreasing to $\eta_{min}$ and (4) below $\eta_{min}$ allows for greater ability to converge on a more precise set of optimum $\theta$ values.*

This process then allow for a model to train at a faster rate allowing for faster or [[Superconvergence]].


[^1]: This is according to the paper, but it's important to adjust the initial $\eta_{min}$ and the new $\eta_{min}$ according to your specific use-case.

[^2]: Making use of a larger learning rate, can also act as a means of regularization during the middle stages of the learning process allowing for a model to escape from local minima by avoid complex weights that overfit onto those local minima. In a sense, it's another form of introducing momentum.

[^3]: Increasing your batch size can yield you faster training when using the [[1cycle Learning Rate Policy]] as you'll be able to set a higher $\eta_{max}$ to surpass local minima. (Though doesn't mean $\eta_{max}$ can be super high either)
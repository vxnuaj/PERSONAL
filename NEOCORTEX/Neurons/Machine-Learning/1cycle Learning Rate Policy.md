A learning rate policy, using one cycle of a [[Cyclical Learning Rate]], then dropping the learning rate by several orders of magnitude below the initial $n_{min}$.

The process behind this is

1. Begin with $\eta_{min}$ as the learning rate, typically set several orders of magnitude lower than $\eta_{max}$
2. Linearly (or exponentially) increase the $\eta$ to $\eta_{max}$
3. Linearly (or exponentially) decrease the $\eta$ to $\eta_{min}$
4. Decrease the $\eta$ to several orders below $\eta_{min}$

The intuition behind this lies in that initially, (1) we need a smaller learning rate to allow for the learning path to begin to converge, yet as the model begins to converge, (2) a faster learning rate could be used to allow for faster learning. Then once the model traverse the loss space at a faster rate, (3) decreasing to $\eta_{min}$ and (4) below $\eta_{min}$ allows for greater ability to converge on a more precise set of optimum $\theta$ values.
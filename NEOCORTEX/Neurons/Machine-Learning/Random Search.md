Random search is similar to [[Grid Search]], with the difference that the hyperparameter definitions are assigned randomly at non-equivalent intervals, for the purpose of testing multiple hyperparameters without losing out on compute power.

![[Screenshot 2024-06-12 at 1.03.25 PM.png | 300]]

The hyperparameters are then chosen through a probability distribution.

This can help if a given parameter has little impact, but another does. 

Having fixed values of a set of [[Hyperparameters]] while one fluctuating another set, like in [[Grid Search]] can waste compute which is what makes the [[Random Search]] more valuable.

In addition, setting hyperparameters at fixed steps like in [[Grid Search]] can lead to one missing the optimal hyperparameters while using random search can lead you to reaching the optimal params.

It has better coverage.

![[Screenshot 2024-06-12 at 1.11.25 PM.png | 500 ]]


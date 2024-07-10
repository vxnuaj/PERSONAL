Hyperparameters are the external parameters, not the weights nor the bias, that control the learning of a neural network.

Hyperparameters might include the [[learning rate]], number of hidden layers, number of neurons per hidden layer, the type of activation function, the type of optimizer, the type of [[Loss function]], the [[batch size]], and much more.
  
The time it might take to train and test, and then the accuracy of a model can depend on it's hyperparameters. 

One must experiment and test hypothesis to find the optimal hyperparameters as it's unaffected by optimization algorithms and typically can't be automated by a model[^1]

[^1]: Though there are other means for speeding up this process such as [[Grid Search]], [[Random Search]], or [[bayesian optimization]]
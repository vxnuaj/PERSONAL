A neural network with 0 hidden layers, 1 output neuron, and without an activation function, can essentially be defined as a linear regression.

It provides very-near similar performance to a linear regression model with a different means of optimization.

Given this, there is no need to introduce complexity and solve linear problems with neural networks. You can just use simple OLS optimization to create a linear model for linear regression, given that a dataset follows a linear curve.

But when building a model on more a more complex, non-linear dataset, 1 hidden layer will be able to model the function for that dataset as long as it's continuous.

Adding a second hidden layer will increase the ability of the model to approximate more complex decision boundaries, allowing for it to retain high accuracy in a dataset.

The issue lies when too many hidden layers are chosen for a non-complex task where a model can begin to overfit.

Likewise, too many neurons will result in under-fitting and too many neurons will result in overfitting.

**Guidelines**
- Should minimize the amount of neurons, but if a simple model doesn't map accurately to the data, you can overfit the model by introducing a large set of neurons and layers, to then introduce regularization.
- It's all about trial and error. 
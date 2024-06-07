Weight Initialization is important to consider when training a model as it might define how well and fast a model trains over a period of time.

Within weight initialization, you want to:
- Break symmetry in parameters, otherwise the model won't be able to learn meaningful representations
- Initialize weights to values that are small enough not to cause exploding gradients[^1]

The means to do so can be dependent on the type of [[activation function]], model architecture, and other hyperparameters.

Common types include [[Xavier Initialization]], [[He Initialization]]



---
- [ ] If the weights are too small, don't we get a vanishing gradient problem? Why is this or isn't the case?

[^1]: Typically done so through [[Xavier Initialization]] or [[He Initialization]]
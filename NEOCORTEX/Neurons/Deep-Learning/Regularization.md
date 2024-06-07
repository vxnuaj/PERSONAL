Regularization is a technique that aims to mitigate variance[^1] and overfitting in a model by penalizing complexity through adding information or changing the loss / objective function.

It involves adding a small term to a loss function which penalizes for large weights.

$J(w,b) = \sum L(\hat{y}, y) + \lambda \cdot Penalty$

>*The penalty is typically the [[Euclidean Norm]] squared or the [[Manhattan Distance]]*

This trades a decrease in training accuracy for an increase in generalizability.

You don't want to regularize your model too much, as you'll end up with a type of model that has a high bias[^1].

In practice, implementing regularization on a bias term is omitted given it's low dimensionality and minimal impact when compared to the weights of a model.

Common regularization techniques include
1. [[Dropout]]
2. [[L2 Regularization]]
3. [[L1 Regularization]]
4. [[Data Augmentation]]
5. [[Early Stopping]]
6. [[Label Smoothing]]


---
[^1]: [[Bias and Variance]]
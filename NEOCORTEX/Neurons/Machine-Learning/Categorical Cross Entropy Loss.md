Categorical Cross Entropy Loss, similar to [[Binary Cross Entropy Loss]], is loss function that's used in multi-class classification in order to estimate the probability of a given input belonging to a specific class.

>*Also known as the [[Softmax]] Loss*

Mathematically, this is defined as:

$CCE = - \frac{1}{m}\sum Y_{train}(\log(\hat{Y}))$, where $m = num_samples$ 

While in code, this can be defined as:

```
CCE = - np.sum(y_train_one_hot * np.log(y_pred)) / m
```

It's derivative with respect to $z$, the weighted sum, can be defined as:

$CCE_{zderiv} = A - Y_{train}$

```
CCE_zderiv = a - y_train_one_hot
```

CCE comes into play when we begin to compute the probability of multiple classes. 

We could instead just consider such a problem as multinomial logistic regression, each class having a probability computed for a singular class separately but being inefficient to compute, as well there being the chance that the computed probabilities for each class end up greater than 1, we can use CCE alongside the [[Softmax]] function.

This essentially combines the multinomial logistic regression into a singular model.

It's also non-linear allowing for the function to capture the non-linearities of a dataset effectively and learn from them.

It's fully differentiable, making it fit for the use of [[Gradient Descent]].

**Advantages**
- Great for multi-class classification
- Fully differentiable, useful for [[Gradient Descent]]
- Robust to outliers, unlike [[Mean Squared Error]]

**Disadvantages**
- Weak for imbalanced datasets.
- Not suitable for regression.



- [x] Definition, Mathematical and Code
- [x] Derivative, Mathematical and Code
- [x] Usage, Concept and Implementation
- [x] Characteristics
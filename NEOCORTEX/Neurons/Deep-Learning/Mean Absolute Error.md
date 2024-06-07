The Mean Absolute Error is a [[loss function]], similar to the [[Mean Squared Error]], but rather computing the absolute difference rather than the squared difference.

Mathematically, it's defined as:

$MAE = \frac{1}{m}\sum | Y - \hat{Y}|, m = numsamples$

While in code, this can be defined as

```
MAE = (1 / samples) * np.sum(np.abs(y_train - y_pred))
```

It's derivative wrt to $z$ and weight, $w$ can be defined as:

$\frac{∂MAE}{∂ z} = sgn(Y - \hat{Y})(-1)$

$\frac{∂MAE}{∂ z} = -sgn(Y - \hat{Y})$

$\frac{∂MAE}{∂ w} = (\frac{∂MSE}{∂z})(\frac{∂z}{∂w})$

$\frac{∂MAE}{∂w} = -sgn(Y - \hat{Y}) (x.T)$

then all averaged out.

>*[[sgn(x)]]*

While in code this can be defined as:

```
MAE_dz = -np.sign(y_train - y_pred)

MAE_dw = (1/samples) * np.dot(MAE_dz, x.T)
```

Just as the [[Mean Squared Error]], MAE is used in [[linear regression]] as a validation metric. It's output value is the average difference between a true value and a prediction.

Think of it as the average absolute [[residual]] of a model.

MAE is robust to outliers, giving that it computes the error on the real difference rather than the squared difference, as [[Mean Squared Error]] does.

MAE is not well suited for gradient descent, given that it is not continuous at 0. Though, many machine learning frameworks can practically bypass it in code, mathematically, it isn't feasible. It's also that errors are rarely exactly zero, so it may pose to be a rare problem.

Just as the [[Mean Squared Error]], MAE is convex when used as a function of a model's direct parameters and inputs, but non-convex when used as a function of non-linear activations, making it unsuitable for such models.



**Advantages**
- More Robust to Outliers than [[Mean Squared Error]]
- Convex in [[Linear Regression]]
- More robust with non-linearities than [[Mean Squared Error]]

**Disadvantages**
- Still prone to non-convexity with non-linear activations
- It isn't smooth, not differentiable at 0
- Doesn't punish as severely as MSE meaning slower convergence, but of course, the gain from this is it's more robust to outliers.
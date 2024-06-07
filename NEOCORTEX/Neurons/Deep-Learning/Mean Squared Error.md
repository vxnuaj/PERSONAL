The mean squared error is a [[loss function]], used to evaluate the error in a model. It does so by calculating the average squared difference between the observed and predicted values.

When used in [[linear regression]], MSE is the average squared residual of the model.

Mathematically, the MSE can be defined as:

$MSE = \frac{1}{m} \sum{(Y - \hat{Y})^2}$, $m = num_samples$

In code, this can be defined as

```
MSE = np.sum((y_train - y_pred)**2) * (1 / m)
```

It's (averaged) derivative, with respect to predicted values, $\hat{Y}$ can be defined as:

$\frac{∂MSE}{∂\hat{Y}} = \frac{1}{m}\sum-2(Y - \hat{Y})$

In code, this can be defined as:

```
MSE_deriv = np.sum(((y_train - y_pred))) * (-2 / m)
```

The MSE is typically used in linear regression models to calculate the squared residual. This squared residual then serves as a metric to evaluate how well a model is performing. The reason we 'square' the difference is to handle any negative residuals that show in the error.

The MSE performs best when used with datasets generated from a gaussian / normal distribution, it doesn't perform well on large outliers given the 'square' as it becomes extremely sensitive to those large outliers

MSE is convex when it's a direct function of a model's parameters and inputs, but when it's a function of an activation output, the introduction of non-linearity can create a non-convex landscape for MSE, which is the case in neural networks.

Given it's non-convexity when used in neural networks, it isn't suitable for use in neural networks as a model risks getting stuck in a local minima rather than optimizing for a global optima. 

As well, in classification, specifically binary classification, MSE tends to *not* punish a model enough for the incorrect prediction. If a true label is $1$ and the prediction is $0$, MSE would output a mere $1$ while other loss functions such as [[Binary Cross Entropy Loss]] would output $\infty$.

**Advantages**
- Can be derived and easily used in [[Gradient Descent]], in [[linear regression]]

**Disadvantages**
- Not robust to outliers. Given that it takes the squared difference, The MSE becomes extremely sensitive to outliers.
- Non Convex in Neural Networks
- Not suited for classification
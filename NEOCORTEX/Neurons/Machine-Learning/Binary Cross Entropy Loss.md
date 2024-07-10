The Binary Cross Entropy Loss is a loss function (BCE) which computes the error or loss of a model that computes a binary classification task.

BCE expects it's $Y$ labels to belong to binary classes of either $0$ or $1$ while it expects it's $\hat{Y}$ predicted labels to belong to a probability between $0$ and $1$.

Mathematically, it is defined as:

$BCE = -\frac{1}{m} \sum Y * \log(\hat{Y}) + ( 1 - Y) * \log(1 - \hat{Y})$, $m = numsamples$

If $Y = 1$, the rightmost part of the equation, $(1-Y) * log(1 - \hat{Y})$ gets canceled out while the left most is used to calculate the loss.

Then, $-\frac{1}{m} \sum BCE = Y * log(\hat{Y})$

If $Y = 0$, the rightmost part of the equation, $Y * \log(\hat{Y})$ gets canceled out while the rightmost is used to calculate the loss.

Then, $-\frac{1}{m} \sum BCE = (1-Y) * log(1-\hat{Y})$

Adding both, and you get the average loss for your entire model.

In code, this can be defined as:

```
m = num_samples

BCE = -(1/m) * np.sum(y_train * np.log(y_pred) + (1 - y_train) * np.log(1 - y_pred))
```

It's derivative can be defined as:

$-\frac{Y}{\hat{Y}} + \frac{(1 - Y)}{(1 - \hat{Y})}$

BCE is a smooth loss function, unlike [[Mean Absolute Error]], making it mathematically suitable for [[Gradient Descent]] in a deep neural network. Also, unlike [[Mean Squared Error]] or [[Mean Absolute Error]], it's fully convex and doesn't have the higher risk of getting stuck at a local minima.

Though, it's sensitive to class imbalance. If one class has more samples than another, a model might be biased towards the majority class.

Given that it's made for a binary classification task, it expects all samples to be within either 1 or 0. Outliers are not tolerated (or else! {lol}).
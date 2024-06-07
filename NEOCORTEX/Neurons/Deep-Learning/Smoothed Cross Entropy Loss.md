The Smoothed Cross Entropy Loss, is a variation of the [[categorical cross entropy loss]], but instead takes in an encoded vector that had [[label smoothing]] applied to it.

Similarly to [[categorical cross entropy loss]], it can be mathematically defined as:

$SCE = - \frac{1}{m} \sum Y(\log(\hat{Y}))$, where $m = numsamples$

while in code, alongside [[label smoothing]], it can be defined as:

```
def smoothed_hot(one_hot_y, alpha, classes):
	sce = one_hot_y * (1 - alpha) + (alpha / classes)
	return sce

smth_hot = smoothed_hot(y_train, .05, 10)

sce = -(1 / 5) * np.sum(y_train * np.log(y_pred))
```

It's derivative definition is as:

$SCE_{deriv} = A - Y_{smooth}$

```
SCE = A - smoothed_hot_y
```

It's characteristics are generally similar to [[Categorical Cross Entropy Loss]] besides the fact that it takes in a label smoothed vector and is more robust against overfitting.

It can be generally used when one may have an imbalanced dataset or an increased amount of uncertainty within it. This can help a model not become overconfident or overfit within the uncertainty, then leading to better results. 

In well defined datasets with well defined & clear labels, such as MNIST, this might not be needed.

**Advantages:**
- More robust to overfitting than [[Categorical Cross Entropy Loss]]
- Better for handling imbalanced datasets, as you redirect the probability of a given label rather than the label being a vector of pure $1$s or $0$s
- Improved estimation under uncertainty, as it tends to not be overconfident and consider multiple outcomes.

**Disadvantages**:
- Increased computational complexity.
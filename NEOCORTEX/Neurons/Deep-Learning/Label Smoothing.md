Label smoothing is a [[regularization]] technique used in classification to *smooth* a given set of class labels into values that aren't purely binary $0$s and $1$s, but rather a smooth set of decimals. 

It introduces intentional noise, which can end up benefiting a model rather than hurting it.

It can potentially, increase model generalizability by reducing overconfidence and overfitting of a model, given the introduction of uncertainty in class labels.

Label smoothing is applied to a [[One hot encoding]], effectively turning the binary $0$s and $1$s into a set of decimal values through the equation:

$y_{ls} = y_{onehot} * (1 - \alpha) + \frac{\alpha}{K}$,

where $a$ is a tunable smoothing [[hyperparameter]], between range $(0, 1)$ that determines the amount of smoothing and $K$ is the total number of label classes.

$\frac{\alpha}{K}$ then is the uniform distribution, a vector of equal probabilities for each label. The probabilities are defined by parameter $\alpha$.

The probability of a correct class is assigned a probability determined by $1-\alpha$, while the remaining probability for the other classes distributed into the vector by the addition of $\frac{\alpha}{K}$.

If $\alpha = 0$, the labels aren't smoothed and we get back the original [[One hot encoding]], but if $\alpha = 1$, we get the [[uniform distribution]] of the labels.

In code, this is defined as:

```
sce = one_hot_y * (1 - alpha) + (alpha / classes)
```


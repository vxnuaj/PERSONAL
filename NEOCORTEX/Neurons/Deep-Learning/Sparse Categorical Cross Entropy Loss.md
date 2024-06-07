Sparse Categorical Cross Entropy is a loss function, very similar to the [[Categorical Cross Entropy Loss]], with the difference in the form it takes in the encoded vector.

It's mathematically defined the same as [[Categorical Cross Entropy Loss]], with the exception of the format of input labels which are here, integer encodings.

It's defined as:

$CE_{sparse} = - \frac{1}{m} \sum y_{intencoded} * \log{\hat{Y}}$

```
l = - np.sum(Y_intencoded * np.log(a2 + eps)) / 60000
```

It's derivative, with respect to $z$ is defined as:

$CE_{sparse}^{z_deriv} = A - Y_{intencoded}$

```
dz = A - Y
```

Rather than taking in a [[one hot encoding]] as an input, it takes in an integer encoding where each label is represented by a single integer, $1, 2, 3, ... K$, where $K$ is the total number of classes.

**Advantage:**
- No need to spend extra compute on getting [[one hot encoding]]s

**Disadvantages:**
- Suffers when presented imbalanced datasets[^1]

[^1]: Which can be helped with [[Smoothed Cross Entropy Loss]], at least a little
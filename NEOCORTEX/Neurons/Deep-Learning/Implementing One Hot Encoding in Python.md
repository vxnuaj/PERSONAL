#programming

>*The example is based on the MNIST dataset with class labels from 0 to 9 and a total sample size of 60,000*
>
>*y is of dimensions (1, 60000)*

To implement [[one hot encoding]] in python, you first create a matrix of zeros with a row size equivalent to the number samples and column size equivalent to the number of classes in your dataset.

>*Or vice versa. The dimensions are up to you, but going forth you'd need to index the `one_hot_y` matrix inversely if you switch it's dimensions*

```
one_hot_y = np.zeros((y.size, np.max(y) + 1))
```

Here, `np.zeros` creates an array of 0s with the rows equivalent to the size of y (60,000) and the number of columns equivalent to the number of classes in `y`.

>*In this case, we use +1 to add onto `np.max(y)`, which is 9 given the MNIST dataset, in order to get a column size of 10. 
>
>If a dataset didn't have a label 0, there wouldn't be a need to +1*

Then, we index the `one_hot_y` matrix with a vector equivalent to the size of `y` and the values inside `y` to then set each indexed value to $1$

```
one_hot_y[np.arange(y.size), y] = 1
```

>*The array created by `np.arange` holds 60000 values of range 0 to 59999*
>
>*Here, you want y to either be a 1D array or a row vector[^1]*

Essentially, the `one_hot_y` matrix, with dimensions $(60000, 1)$ is indexed by 

1. Taking an array equivalent to the total size of the dataset, $(60000, 1)$, as the row index to get a given sample.
2. Taking `y`, with dimensions $(60000, 1)$, as a column index to get the the position in the one_hot_y vector corresponding with a given label.

This is computed over all 60000 samples simultaneously to properly encode each sample label into a `one_hot_y` matrix.

[^1]: I'm still not sure why, I'm figuring it out.
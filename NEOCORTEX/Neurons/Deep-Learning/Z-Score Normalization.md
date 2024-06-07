Essentially, subtract your data by the mean and divide over the standard deviation.

The resulting features will have a mean of $0$ and a unit variance ($1$)


Say there's a dataset of $X$, where $X$ is $\begin{pmatrix} x_1 \\.\\.\\.\\ x_{100} \end{pmatrix}$
You can normalize the dataset by

1. **Subtracting the Mean**
	
	>*This enters the dataset around 0*
	
	$u = \frac{1}{m} \sum_{i=1}^m x_i$
	
	$X = X - u$

	But this only centers the dataset around $0$ and the variance of features amongst the training sample $X$ can remain large.

2. **Normalizing the Variance**

	You then need to normalize the variance.

	$\sigma^2 = \frac{1}{m} \sum_{i = 1}^m (x_i - u)^2$ 

	 $x = x / \sigma$



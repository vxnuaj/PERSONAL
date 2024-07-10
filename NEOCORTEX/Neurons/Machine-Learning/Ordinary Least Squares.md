Ordinary Least Squares is a means to finding the optimal parameters in a linear regression, through simple equations which rely on mean centering as:

$\hat{\beta}_1 = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2}$

$\hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x}$

where any variable denoted by $\bar \theta$ is it's mean.

It's important to note that when computing multiple variables of $\hat{\beta_1}$, when summing over an axis, you must then normalize the coefficients over a division by the total number of features in the dataset or sample.

Thereby the final $\hat{\beta_1}$ is equivalent to:

$\frac{\hat{\beta_1}}{n}$ where $n$ is the total number of features:

#stats 

The standard error is the standard deviation of a sample population, estimating how well the sample population maps to the full population.

$SE(\mu) = \frac{\sigma}{\sqrt{n}}$

where $\sigma$ is the standard deviation of a population and $n$ are the total samples of the population.

As $n$ increases, the $SE(\mu)$ will shrink.

In a linear regression model, to compute the standard error of given coefficients, one can compute them as:

$SE(\hat{\beta}_0)^2 = \sigma^2 \left[ \frac{1}{n} + \frac{\bar{x}^2}{\sum_{i=1}^{n} (x_i - \bar{x})^2} \right]$

$SE(\hat{\beta}_1)^2 = \frac{\sigma^2}{\sum_{i=1}^{n} (x_i - \bar{x})^2}$

where $\hat{\beta_0}$ is the intercept and $\hat{\beta_1}$ are the weights.
#stats #questions

Also known as the coefficient of determination, $R^2$ explains the total variance in a dependent variable $Y$, yielded by the independent variables $\theta$, used to predict the dependent $Y$.

$1 - \frac{SSE}{TSS}$

$SSE$ can be defined as the sum of squared residuals while $TSS$ can be defined as the summed variance between dependent $Y$ and the prediction $\hat{Y}$.

Their division gives us the percent of unexplained variation of the model to the total variation in the dataset.

We're essentially computing, how well our model explains the variation from the mean, how well the model was able to reduce the overall variance.

> *If $\frac{SSE}{TSS}$ is equivalent to $1$, then that means that the total error ($SSE$) is equivalent to the total variance of the model ($TSS$), indicating that our model is poorly fitting to the dataset.*
>
> *Inversely, if the ratio is low, near $0$, it means most of the variance of the model is explained by the irreducible error or [[Bayes Error]]* 

Then this division value, $\frac{SSE}{RSS}$ is subtracted for $1$ to get the total variation that is accounted for and can be explained by $\theta_i$ and which can't.

> $\theta_i$ where $i ∈ ℝ^2$

A high value of $R^2$ indicates that our model is capturing the majority of the variance in the dataset, indicating that it's able to properly model the dataset.[^1]

A low $R^2$ indicates that the model isn't capturing much of the variance in the data, meaning that it has a high bias.

If $R^2$ is $.85$, that indicates that 85% of the variation in $Y$ can be explained by $\theta_i$.

The remaining $.15$ or $15$ of the variation is due to factors not included in the model.

---

**So then is $R^2$ a metric of how much our model, even if trained to the max, can fit a set of datapoints? Then if $R^2$ is high despite our model already being maximally trained, our model won't be able to fit a datapoint?**

So ultimately, yes, if the $R^2$ is very low despite training a linear regression model, it indicates that the variability in the dataset cannot be modeled by a linear regression and therefore might not be well suited for the task.

[^1]: Besides overfitting which is another topic.
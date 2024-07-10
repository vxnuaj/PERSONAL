******#mathematics 

The vectorized mathematics for [[Backpropagation]] in [[Linear Regression]] assuming a use of the [[Mean Squared Error]] as the loss function can be defined as such:

$MSE = \frac{1}{n} \sum_{i=1}^{n}(Y_i - \hat{Y_i})^2$

$\frac{∂MSE}{∂\hat{y}} = \frac{2}{n}(\hat{y} - y)$

$\frac{∂MSE}{∂W} = (\frac{∂MSE}{∂\hat{Y}})(\frac{∂\hat{Y}}{∂W}) = -\frac{2}{n}(Y-\hat{Y})X^T$

$\frac{∂MSE}{∂B} = (\frac{∂MSE}{∂\hat{y}})(\frac{∂\hat{y}}{∂B}) = \frac{2}{n}\sum(y-\hat{y})$

$W_{new} = W - ⍺ * \frac{∂MSE}{∂W}$ 

$B_{new} = B - ⍺ * \frac{∂MSE}{∂B}$

where, $⍺$ is the learning rate, $\hat{Y}$ is the predicted value, and $Y$ is the true value.

This process is repeated for as many epochs as needed to effectively train a model.



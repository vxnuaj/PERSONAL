
The vectorized mathematics of backpropagation when using the [[Sigmoid]] activation function and the [[log loss]] function,

>*Reminder: If we're calculating the gradient in a non-vectorized manner, we don't need to compute the averages through divisions by $m$ or summations.*

in the case of a 2 layer network, is defined as:

***First Layer:***

$\frac{∂J}{∂Z_2} = (\frac{∂J}{∂A_2})(\frac{∂A_2}{∂Z_2}) = A_2 - Y$

$\frac{∂J}{∂W_2} = (\frac{∂J}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂W_2}) = \frac{1}{m} A_1^T(A_2 - Y)$ [^1] [^2]

$\frac{∂J}{∂B_2} = \frac{1}{m}\sum_{i=1}^m(\frac{∂J}{∂A_2})(\frac{∂A_2}{Z_2})(\frac{∂Z_2}{B_2}) =  \frac{1}{m}\sum_{i=1}^m A_2 - Y$[^3]

***Second Layer:***

$\frac{∂J}{∂Z_1} = (\frac{∂J}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂A_1})(\frac{∂A_1}{∂Z_1}) = W_2^T \frac{∂L}{∂Z_2} * \frac{∂J}{∂A_1}$[^4]

$\frac{∂J}{∂W_1} = \frac{1}{m}(\frac{∂J}{∂Z_1})(\frac{∂Z_1}{∂W_1}) = \frac{1}{m}\frac{∂J}{∂Z_1}X^T$

$\frac{∂J}{∂B_1} = \frac{1}{m}\sum_{i=1}^{m}(\frac{∂J}{∂Z_1})(\frac{∂Z_1}{∂B_1}) = \frac{1}{m}\sum_{i=1}^{m}W_2 \frac{∂J}{∂Z_2} * \frac{∂J}{∂A_1} = \frac{1}{m}\sum_{i=1}^{m}\frac{∂J}{∂Z_1}$

---

[^1]:  The $(\frac{∂J}{∂A_2})(\frac{∂A_2}{∂Z_2})$ is equivalent to $A - Y$ (given by $\frac{∂L}{∂Z_2}$) and the $\frac{∂Z_2}{∂W_2}$ is equivalent to $A_1^T$ given that in the original linear combination, the multiplication of $W \cdot X$ is equal to $Z$. We take the transpose of $A_1$ to ensure that the dimensions of $A_1$ align for the matrix multiplication of the computation.

[^2]: We average the loss over $m$ samples to normalize the gradient and average it with respect to the number of samples in order to prevent noisy updates which can lead to difficulty for convergence. <br><br>Here, we don't take the summation as the matrix multiplication of $A_1^T$ and $(A_2 - Y)$ already computes a summation for each sample. The only step we need to take to average is the division by $m$ samples. <br><br><details><summary>Example</summary> <br>If $A_1^T$ is a $(1,2)$ matrix and $Y$ is a $(2, 1)$ matrix:<br>$\begin{bmatrix} a_1, a_2\end{bmatrix} · \begin{bmatrix} y_1 \\ y_2 \end{bmatrix} = \begin{bmatrix} a_1 \cdot y_1 + a_2 \cdot y_2 \end{bmatrix} = z$<br><br>Here, the sum is already computed for us, hence we only divide by $m$ samples to get an average</details>

[^3]: Unlike the line, here we do take a summation of $A_2 - Y$ as there isn't a matrix multiplication or dot product that implicitly takes the summation for us. Then we divide by $m$ samples to get a final average

[^4]: Again, we transpose $W_2$ to ensure that the dimensions remain proper for the matrix multiplication
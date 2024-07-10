The Exponential Linear Unit, or ELU, is an activation function similar to [[ReLU]] or [[Leaky ReLU]] with the exception that the lower bound of the function, curves into a flatter gradient rather than abruptly changing into one.

Mathematically, ELU can be defined as:

$ELU(z) = \begin{cases} z, z > 0 \\ \alpha(e^z -1 ), z <= 0 \end{cases}$

$ELU(z) = max(z, (alpha * (np.exp(z) - 1))$

while in code, this can be defined as:

```
alpha = .01

#ELU | Either works

elu = np.maximum(z, (alpha * (np.exp(z) - 1)))
elu2 = np.where(z > 0, z, (alpha * (np.exp(z) - 1)))
```

It's derivative can be defined as:

$ELU(z) = \begin{cases}1, z>0 \\ \alpha e^z, z <= 0\end{cases}$

while in code can be expressed as:

```
elu_grad1 = np.where(z > 0, 1, (alpha * np.exp(z)))
```

The range of ELU goes from $-\infty$ to $\infty$, it's lack of bounds mitigating the issue of dead neurons as [[ReLU]] given that it doesn't have as high level of sparsity when $z < 0$. 

It's lack of bounds also mitigates the [[Vanishing Gradient]] that's faced when using [[Sigmoid]] and [[Tanh]]. 

ELU, unlike [[ReLU]], is smooth, meaning it is differentiable over it's entire domain. Mathematically,  one doesn't face the issue of discontinuity faced with [[ReLU]] or [[Leaky ReLU]] where NaN values are propagated when an input, $z$, is $0$.

It's continuity then allows for a smoother gradient descent, allowing a slight change in inputs to slightly change the outputs.

Being a monotonically increasing function, the lack of sign change allows for easier interpretability of a model learning and decreases the risk of getting stuck in a local minima. Gradient descent can now optimize for the global minima easily.

ELU is less computationally efficient than [[ReLU]] or [[Leaky ReLU]] given the addition of an exponential, $e$, but is more computationally efficient than [[Sigmoid]] or [[Softmax]] as it uses less exponentials, $e$, than those.

ELU is commonly used in the hidden layers of deeper networks as it introduces non-linearity with no risk of NaN values propagating through the network during gradient descent.

**Advantages:**
- Differentiable everywhere, no NaN values
- Lessens the probability of the [[Vanishing Gradient]]
- No dead neurons at $z < 0$

**Disadvantages:**
- More computationally expensive than [[ReLU]] and [[Leaky ReLU]]

---
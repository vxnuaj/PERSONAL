Dropout is a [[Regularization]] technique that eliminates / ignores a specific set of neurons to optimize the network size to reduce overfitting and improve generalizability.

> *This in a sense adds noise to the surface of the loss function, making it more difficult to achieve a smooth learning path, but comes with some benefits (below)*

It aims to reduce co-dependence / co-adaptation amongst neurons. Some neurons depend on others to do the 'hard work' while they sit by and not contribute to the overall output.

>*Dropout is more commonly used during training a model, and more commonly disabled during testing. Though, in research, some used dropout as a means of assessing the uncertainty in the predictions of a model to assess it's confidence and effectiveness.*
 
When you dropout neurons randomly, the 'lazy' neurons must start learning and begin to reduce reliance on the 'hard working' neurons.

In dropout regularization, dropping neurons out means making a set of neurons $0$, based on a probability $1- p$, and normalizing the rest of the neurons that aren't eliminated as $\frac{a}{p}$.
	
	![[Screenshot 2024-06-04 at 4.51.37 PM.png | 400]]

Dropout is typically implemented per layer, with the probability $p$ of keeping a neuron's output during training. This probability is often lower for layers with a higher number of weights to reduce overfitting and higher for layers with a lower number of weights where overfitting is less of a concern.

Mathematically, where the activation is $a$, dropout looks as:

>*This is implemented in the inverted form, where we scale by $p$ during training rather than multiplying weights by $p$ during testing*

$a' = \begin{cases} 0, \hspace{3mm} 1-p \\ \frac{a}{p}, \hspace{3mm} otherwise \end{cases}$

where $a'$ is the 'dropped out' activations, $a$ are the original activations, and $p$ is the probability of keeping a neuron.

In code, this looks as:

```python
# Assuming 'A1' is the activation matrix for a particular layer 
# and 'p' is the keep probability (the probability of keeping a neuron). 

# Initialize random dropout matrix 'D1' with the same dimensions as the activation matrix 'A1'. 

# Each entry in 'D1' is drawn from a uniform distribution over [0, 1). 

D1 = np.random.rand(A1.shape[0], A1.shape[1]) 

# Set entries in 'D1' to 0 where the value is less than the probability of keeping a neuron (p), and to 1 where the value is greater than or equal to the probability of keeping a neuron. 

D1 = D1 <=keep_p

# Element-wise multiplication of the activation matrix 'A1' and the dropout mask 'D1' to apply dropout. Neurons corresponding to 0 in 'D1' are dropped out. 

A1 = np.multiply(A1, D1) 

# Scale the activations of the neurons that have not been dropped out by p) to maintain the expected value. 

A1 = A1 / (keep_p)
```

The resulting network is a subset of the entire network.

Each neuron should have an approximately similar scaled impact on the model before and after dropout so we must apply a scaling factor which involves the division: $\frac{a_l}{p}$ where $a$ is the activation at the $lth$ layer.

Otherwise the stability and performance of a network would diminish. Amongst the $2^n$ possible thinned networks, the scale of the output would vary making the combined model during testing prone to inaccuracy.

A downside of implementing dropout is the loss of being able to apply a loss function as a metric, given that it's surface is constantly varying based on probability $p$. 

To mitigate this, after training epochs, you can test the entire network as a whole using the cost function to ensure that it's value is decreasing over time.

Dropout also takes more iterations to converge as you're eliminating a random set of neurons per iteration, thereby reducing the amount of learning steps some neurons are able to take during gradient descent.

**Practical Tips:**
- Don't use dropout if a model doesn't overfit
- But if the above is true, increase the capacity of the model to make it overfit and then use dropout to build a larger capacity model.

---

> *Checkout [[Dropout - A Way to Prevent Networks from Overfitting]]*
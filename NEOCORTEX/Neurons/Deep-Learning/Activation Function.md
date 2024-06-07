#mathematics 

Activation Functions are a type of function utilized in neural networks that aim to introduce non-linearity to a set of outputs, typically the [[weighted sum]]. 

The non-linearity introduced then allows for a neural network to capture more complex relationships and patterns from a given input.

Each activation function has a set of key features, that need to be considered when implementing a neural network:

1. Non-linearity

	The introduction of nonlinearity proves to be extremely important for a neural network as it allows for it to capture complex features and datapoints from a set of inputs. Without activation functions, a neural network would essentially be a set of linear combinations, unable to produce quality results to solve complex problems.

2. Range

	Activation functions have different ranges, some ranging from $0$ to $1$, others from $0$ to $infinity$, and others from $-1$ to $1$. 
	
	The output range of an activation function can be important to consider, for a variety of factors. 
	
	It's range can affect the scale of gradients during [[Backpropagation]] leading to exploding or vanishing gradients, the numerical stability, and the interpretability of an activation function (some, such as [[softmax]], can be seen as a probability).

3. Monotonicity

	[[Monotonicity]], ensures that as the input of a model changes, the output remains consistently moving in a given direction (increasing or decreasing). 
	
	This can be important for the interpretability of a model (especially when computing probabilities) and the gradient descent and optimization.

	If a function isn't monotonic, the gradient sign may change irregularly over different inputs which can then lead to the model converging to the wrong set of parameters at a local minima instead of a global minima. This then makes the model less interpretable in how it learns.

4. Continuity

	Continuity in an activation function allows for smooth continuous changes. As the inputs change, the outputs change slightly. This becomes important for ensuring smooth gradient descent computations during [[Backpropagation]].

5. Differentiability

	Differentiability allows for gradient based optimization algorithms ([[Backpropagation]]) to properly allow gradients to be computed for the weight updates. 

	If differentiability wasn't the case within the domain of an activation function, it's possible that NaN values begin to propagate throughout a model.

6. Sparsity

	The [[sparsity]] of activation functions can be beneficial when looking for more efficient computations. The more sparse an activation function is, the less computations it might have to compute in order to reach it's output, then also leading to better memory efficiency.

	[[Sparsity]] can also improve regularization. By encouraging neurons to be inactive at $0$, it reduces complexity which in certain contexts can mitigate overfitting and improve generalization.

	Too much sparsity, on the other hand, can limit the power of a model to learn complex and nuanced patterns in a dataset. 

	An activation function should be sparse enough to provide efficient computations and good [[regularization]].


7. Computational Complexity

	The more computationally expensive an activation function is to compute, the slower a neural network will take to learn and then provide inference. It's better to use activation functions that are computationally efficient, in order to speed up the learning process and save valuable resources.
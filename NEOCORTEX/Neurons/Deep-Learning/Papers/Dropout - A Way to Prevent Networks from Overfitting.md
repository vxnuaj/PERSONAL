> [LINK](https://jmlr.org/papers/volume15/srivastava14a/srivastava14a.pdf)

**Introduction:**

- Combining models to improve generalization performance nearly always improves performance given that they were as trained on different samples of a dataset with a varied architecture[^1]
- Doing so with large neural networks and taking the average of the outputs[^2] can be computationally expensive.
- It's also daunting task to train multiple architectures and find the optimal hyperparameters as well as collect a good size of training data.

- Dropout aims to address the issues, by preventing overfitting and combining variations of neural network architectures in a more efficient manner.
- Dropout removes a set of neurons and keeps a set based on a keep probability $p$ where the probability of dropping a neuron is $1-p$

	![[Screenshot 2024-06-04 at 9.31.24 AM.png]]

- The result of applying dropout is then a thinner neural network, comprised of neurons *"that survived dropout"*
- There are a collection of $2^n$ thinned networks (given the random probability and the binary choice of including a neuron) where $n$ is the total number of neurons in the overall network.
- It isn't feasible to apply the averaged outputs $2^n$ thinned networks (given an exponential increase an lack of computation power) so you can multiply the weights by the scaling factor $p$ during testing or divide the weights during training by $p$.
- Then, you can more easily, in a sense, combine the the thinned networks during test time as a single model, given that combining multiple models [^1] can improve generalization.

**Model Description**

- Given a model of 
	1. $z = wy + b$
	2. $y = f(z)$
- The dropout operation becomes
	1. $r$ ~ $Bernoulli(p)$, where $r$ is a vector of binary values (0 or 1), drawn from a uniform distribution, with a probability $p$ of being $1$[^3]
	2. $\tilde{y} = r * y$, where $\tilde{y}$ are the inputs without drop out.
	3. $z = w \tilde{y} + b$
	4. $y = f(z)$

	This applies dropout to purely the inputs, $y$.

- During testing, you then must multiply the weights by the probability $p$ to scale the weights in combination with the $2^n$ thinned networks. 
- Or during training, you can scale the the activations through a division of $y$ (or $a$ depending on the layer) by $p$. This is called 'inverted dropout'

	![[Screenshot 2024-06-04 at 9.57.58 AM.png]]

[^1]: Ensemble Models?
[^2]: Outputs are averaged in order to get the 'average prediction' of both models.
[^3]: ![[Pasted image 20240604165753.png | 200]]

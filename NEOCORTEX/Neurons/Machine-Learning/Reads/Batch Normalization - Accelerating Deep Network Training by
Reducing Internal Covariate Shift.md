#researchpaper 

> [Original Paper](https://arxiv.org/pdf/1502.03167)

##### **Abstract**

- Deep Neural Networks are complicated by the fact that the distribution of each layer's inputs changes, thereby changing the parameters of the model adjacently. 
- This can make a model take longer to learn as it has to iteratively adjust the distribution of the parameters in terms to the distribution of the inputs per layer, thereby also complicating the surface of the loss function.
- This is called Internal [[Covariate Shift]].
- The solution is to make normalization a part of a model's architecture per ***layer*** with a different normalization factor ( in terms of $var$ and $\mu$ ) per each mini-batch.
- This then allows for a model to use higher learning rates, care less about weight initialization, and improve training speeds.

##### **Introduction**

- [[Gradient Descent]] / [[Stochastic Gradient Descent]] has been key to deep learning.
- But it requires careful tuning of model [[Hyperparameters]], especially the learning rate and the means of [[Weight Initialization]]. 
- Training a model then also turns out to be complicated by the fact that per each input to each layer, the distribution of inputs iteratively changes per layer during training given the continuous adjustments of model weights and biases. This is called [[Covariate Shift]]
- Therefore, a model has to change the distribution of it's weights constantly to represent the dataset, making it difficult for it to converge on the optima of the loss, faster.
- Considering a network with the $sigmoid$ activation, $\frac{1}{1 + exp(-x)}$, for very high or low values of $x$, you can encounter a vanishing gradient problem which becomes worse in the deeper a network gets.
- You can address it with the $ReLU(x)$ activation and careful weight initiaization ([[He Initialization]] & [[Xavier Initialization]]), and small values of $\alpha$, but it'd be more effective to center the distribution of inputs to the activation functions around a fixed size to avoid this [[Vanishing Gradient]].

- Then, normalizing these distributions mitigate the [[Covariate Shift]], [[Vanishing Gradient]]s, and increase training times + learning rates ($\alpha$).
- It allows for a model to use activation functions that are prone to saturation ([[Sigmoid]], [[Tanh]]) without getting stuck in the saturating regions (meaning extremely large or small values).

##### **Towards Reducing Internal Covariate Shift**

- It's been known that whitening ($\mu := 0$, $var := 1$) the inputs of a model can increase training speed (by decorrelating the activations to their inputs, given the normalization)
- The same can be done for each layer, to remove the effects of [[Covariate Shift]].
- Considering a model, say $f$, that's composed of inputs $u$, a bias $b$, and a shift in the mean by $x$, to get an output $\hat{x}$. Shifting the affine transformation by $b$, and then subtracting the mean, $x$, would lead to a cancelling effect where $b$ eliminates the effect of subtracting the mean, $x$.
- Then the gradient of the loss function with respect to $b$ will not change in value whilst undergoing the update step, $b = b - \alpha \cdot \frac{∂L}{∂b}$, while the paramter $b$ will still iteratively update thereby causing an exploding or vanishing of the parameter $b$ in terms of it's value.
- So you can effectively remove the $b$ parameter in BatchNorm

##### **Normalization via Mini-Batch Statistics**

- So to mitigate this, again, introducing a narrowed distribution for the inputs to each layer would be ideal as it would allow for the gradient of the loss with respect to model parameters to account for the normalized distributions and scales.
- This can be done through [[Z-Score Normalization]], where it is:

	$\hat{x} = \frac{x - E[x]}{\sqrt{Var[x]}}$

- Though, then normalizing the input of a layer might change what the original layer can represent and in the case of using [[Sigmoid]], $\frac{1}{1 - e^{-x}}$, might make inputs $\hat{x}$ remain centered in the linear zone of the [[Sigmoid]]. 
- So to mitigate this, you can introduce parameters $\gamma$ and $\beta$ to allow for a model to learn the optimal mean, $\beta$, and variance, ($\gamma$), for each input to take. 
	
	$x_{norm} = \gamma \hat{x} + \beta$

- Thereby the model can learn to cancel out the normalization, essentially computing an identify function, if it's beneficial for the model to not apply the normalization and use the original input distribution. If $\gamma = 1$ and $\beta = 0$, this will be the case.
- These parameters are trained in a model through a [[Gradient Descent]].

- The $batchnorm$ looks as:

	$\mu = \frac{1}{m} \sum_{i=1}^m Z_l^i$ // *mean*
	$Z_l^i = Z_l^i - \mu$ // *centering around 0*
	$\sigma^2 = \frac{1}{m} \sum_{i = 1}^m (Z_l^i - \mu)^2$ // *variance*
	$Z_{lnorm} = \frac{Z_l}{\sqrt{\sigma^2 + \epsilon}}$ // *scaling to unit variance*
	$\tilde{Z_{lnorm}^i} = \gamma Z_{lnorm}^i + \beta$ // *scaling and shifting per $\beta$ and $\gamma$ if needed*

- So you can then compute the [[Backpropagation]] as:
	
	![[Screenshot 2024-06-14 at 5.30.16 PM.png | 400]]

> *Checkout personal derivations @ [[Batch Normalization]]*

- The forward pass can be defined as (derived for personal use case):

	$Z_1 = W_1 \cdot X$
	$Z_{1norm} = batchnorm(Z_1)$
	$\tilde{Z_{1norm}}= \gamma_1 \cdot Z_{1norm} - \beta_1$
	$A_1 = ReLU(\tilde{Z_{1norm}})$
	
	$Z_2 = W_2 \cdot A_1$
	$Z_{2norm} = batchnorm(Z_2)$
	$\tilde{Z_{2norm}}= \gamma_2 \cdot Z_{2norm} - \beta_2$
	$A_2 = Softmax(\tilde{Z_{2norm}})$
	
	$Loss = CCE(A_2, Y_{onehot})$

##### **Batch Norm enables higher learning rates**

- In traditional deeper networks, a higher learning rate can cause [[Exploding Gradients]] or [[Vanishing Gradient]]s as well as getting stuck in local minima. But Batch Normalization allows for a higher learning rate given the normalization. 
- It prevents from small or larger changes to propagate into the network and vanish or explode.

##### Batch Normalization regularizes the model

- Similar to dropout, when computing on mini-batches, the mean $\mu$ and variance $\sigma^2$, are computed per mini-batch.
- Given that the $\mu$ and $\sigma^2$ can vary depending on the mini-batch, these variations add a type of noise per forward pass iteration of each mini batch, thereby allowing for each parameter to update in a more "active" manner that generalizes the parameters $\beta$ and $\gamma$ more effectively, slightly mitigating the risk of overfitting
Mini-Batch Gradient Descent is similar to [[Gradient Descent]] in the algorithmic sense, with the difference that it processes smaller batches of the entire dataset prior to taking a training step, rather than processing the entire batch at once and then taking a training step.

This can improve computation time and improve learning speed of a model, especially when there is a large number of training samples in a dataset.

For some intuition, say you have training set $X$.

$X = (784, 60000)$, where there are $784$ features and $60000$ samples.

We can split up $X$ into $6$ mini-batches of $10000$ samples each:

$X^{1} = (784, 10000)$
$X^{2} = (784, 10000)$
$X^{3} = (784, 10000)$
$X^{4} = (784, 10000)$
$X^{5} = (784, 10000)$
$X^{6} = (784, 10000)$

feeding each $X^{t}$ in once and taking a training step in between, then restarting from $X^{1}$ once more.

The trend of the loss function will be less smooth due to the fact that within each forward pass, your model is operating on new unseen samples, but it should still trend downward.

Choosing a mini-batch size considers computational cost and the quality of training.

- The mini batch size should fit into the memory ([[RAM ]]or [[VRAM]])
- GPUs and TPUs are optimized for parallel computation, larger batch sizes can better use these capabilities.[^2]

- Smaller Batch Sizes make way for more oscillations and a noisier gradient computations which helps for escaping local minima, especially in non-convex loss functions
- Smaller batch sizes might lead to better generalization as the noisiness can act as a form of regularization
- Smaller batches can be more effective with a smaller learning rate. Tuning your learning rate (and optimizer if RMSprop) to a lower value, when your batches are smaller can help a model converge sooner.

Principles
- If you have a small training set, make use of batch [[Gradient Descent]]
	- where $m ≤ ~2000$
- Typical mini-batch sizes are 
	- 32 $\rightarrow$ 1024, on the powers of $2$ given how modern computer hardware runs[^1]
- Make sure your mini-batch fits in your CPU / GPU nmemory
- If you're using BatchNorm, very small batches can lead to poor estimates of batch statistics ($\mu$ and $\beta$)


---

[^1]: Many computer systems have architectures that are optimized for accessing data on powers of 2.
[^2]: See [here](https://cloud.google.com/tpu/docs/troubleshooting/trouble-tf#:~:text=As%20a%20general%20rule%2C%20using,in%20terms%20of%20samples%2Fsecond.&text=The%20batch%20size%20of%20any,the%20tensors%20to%20this%20size.) for Google's explanation on TPU and larger batch sizes
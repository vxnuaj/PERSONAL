> *Yann LeCun, Yoshua Bengio, & Geoffrey Hinton*

Deep Learning, computational models of multiple processing layers that process data of high complexity to learn it's complex representations

Used in object detection, speech recognition, drug discovery, genomics, and much more.

[[Convolutional Neural Networks]] have been able to bring breakthroughs in image processing, video, speech, and audio, while [[Recurrent Neural Networks]] shine on sequential data such as text and speech (EEG as well!)

>*CNNs, typically for spatial features whilst RNNs for temporal / sequential features*

Much of modern society is powered by machine learning, such as search engines, content filtering, and shopping recommendations to smartphones and cameras.

More traditional ML techniques were previously more limited to process natural data, as for decades it required precise engineering and domain expertise to properly design feature extraction pipelines for data processing.

Deep learning models, on the other hand, are capable of representation learning where they can be fed raw data without a need for data processing.

> *An big example can be EEG data, where traditionally, one would have to pre-process the data by filtering, normalizing, and epoching a signal to then extract the unique time-domain, frequency-domain features which would finally then be fed into a model through a combined feature vector.*
> 
> *Modern deep learning on the other hand, is able to learn features from raw EEG data without the need for extensive pre-processing.*

With the introduction of enough non-linear transformation, a model can essentially learn all the needed features from a data sample. The deeper a model is, the more complex features it can derive from, for example, an image.

The key aspect is that these models can learn these features on their own, with minimal intervention from a human engineer 

> *What's sick about these models are their applicability to complex tasks, where as models become increasingly accurate, they might be able to change the world.
> 
> "...predicting the activity of potential drug molecules, analyzing particle accelerator data, reconstructing brain circuits, and predicting the effects of mutations in non-coding DNA on gene expression."*

#### **Supervised Learning**

Supervised learning is the most common form of machine learning, where the data fed into a model is labeled with its category.

Essentially, a model is shown an image and produces an output in the form of a vector of the size of total categories or classes.

> *This is typically done through passing the raw weighted sum of a final layer through a [[Softmax]] activation function*

An objective function ([[Loss function]]) is used to gauge the total error between the prediction of a model and the true labels

> *In classification tasks, the objective function is typically [[Categorical Cross Entropy Loss]], where it's fed a [[One hot encoding]] of the true labels and the predicted probabilities of labels*

The objective function is then used as a guide to minimize the error of the model. To do so, a gradient is computed that's then used to update the weights

>*This is [[Backpropagation]] where the gradient of the loss is computed with respect to a specific parameters $\theta$ and [[Gradient descent]], where we want to find the optimal parameters of a model that find the global minima of the [[Loss function]] with respect to a param θ*

Traditional linear classifiers can be used to make predictions on a dataset but won't be able to detect subtle changes to, as an example, images very well without robust feature extraction.

A deeper model on the other hand will be able to get more specific representations of an image and learn from it, in order to compute more precise predictions without feature extraction. 

> *This form of representation learning is crucial for advanced applications.*

#### **Neural Networks and [[Gradient Descent]]**

The training of a neural network involves a forward pass through multiple layers each involving the summation of linear combinations to get a weighted sum and an activation function applied to the weighted sum to introduce non-linearity. Then, backpropagation is applied to get the gradients of 

This type of non-linearity allows for a model to capture more complex features within a given sample.

The forward pass, using matrix notation, is mathematically defined as:

$Z_l = W_l \cdot X + B_l$
$A_l = g(Z_l)$

where $Z$ is the matrix multiplication of a weighted matrix $W$ with input vector $X$ and the element-wise addition of a bias matrix $B$.

The activation function $g$, which may be Softmax, Tanh, ReLU, Sigmoid, or any other depending on the context, is applied to the weighted sum $Z$. In a traditional feed forward neural network, this process is repeated for all layers, $L$.

Once the final activation, $A_L$, is computed, a loss function, as an example [[Categorical Cross Entropy Loss]], is used to get the total loss or cost between the prediction and the true labels.

$CCE = \frac{1}{m} \sum Y \cdot \log{A_L}$, where $m$ is the total training samples per batch.

Let's assume we have a 2-layer neural network, applied to a multiclass classification task, where the loss function is [[Categorical Cross Entropy Loss]], the activation function for the hidden layer is ReLU, and the activation function for the output layer is [[Softmax]].  

The backpropagation takes the gradients as:

**Output Layer:**

$\frac{∂CCE}{∂Z_2} = (\frac{∂CCE}{∂A_2})(\frac{∂A_2}{∂Z_2}) = A_2 - Y$

$\frac{∂CCE}{∂W_2} = (\frac{∂CCE}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂W_2}) = (\frac{∂CCE}{∂Z_2})(\frac{∂Z_2}{∂W_2}) = (\frac{∂CCE}{∂Z_2})(A_1^T) = (A_2 - Y)(A_1^T)$

$\frac{∂CCE}{∂B_2} = (\frac{∂CCE}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂B_2}) = \frac{∂CCE}{∂Z_2} = A_2 - Y$

**Hidden Layer:**

$\frac{∂CCE}{∂Z_1} = (\frac{∂CCE}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂A_1})(\frac{∂A_1}{∂Z_1}) = (\frac{∂CCE}{∂Z_2})(W_2^T)(ReLU_{deriv}(Z_1)) = (A_2 - Y)(W_2^T) * (ReLU_{deriv}(Z_1))$

where $ReLU_{deriv}(Z_1) = \begin{cases} 1, Z_1 > 0 \\ 0, Z_1 < 0 \end{cases}$

$\frac{∂CCE}{∂W_1} = (\frac{∂CCE}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂A_1})(\frac{∂A_1}{∂Z_1})(\frac{∂Z_1}{∂W_1}) = (\frac{∂CCE}{∂Z_1})(X^T) = (A_2 - Y)(W_2^T) * (ReLU_{deriv}(Z_1))(X^T)$
$\frac{∂CCE}{∂B_1} = (\frac{∂CCE}{∂A_2})(\frac{∂A_2}{∂Z_2})(\frac{∂Z_2}{∂A_1})(\frac{∂A_1}{∂Z_1})(\frac{∂Z_1}{∂B_1}) = \frac{∂CCE}{∂Z_1} = (A_2 - Y)(W_2^T) * (ReLU_{deriv}(Z_1))$ 
Each single parameter has it's own gradient.

Typically, for more efficient training, each gradient is averaged over the total amount of training samples in a given batch.

$\frac{1}{m} \sum \frac{∂CCE}{∂\theta}$, where $\theta$ is a given parameter and $m$ is the total number of training samples.

The averaged gradient is then used to update a given parameter, $W$ or $B$, denoted by $\theta$ in the opposite direction of the gradient.

$\theta_{new} = \theta - \alpha * \frac{∂CCE}{∂\theta}$

Here, $\alpha$ is a hyperparameter known as the learning rate, determining how fast a model will learn. The higher it is, the more prone a model will be to overshooting, while making it smaller makes a model slower and more computationally expensive to train.

This entire process is called [[Gradient Descent]] which can be effectively applied to any amount of layers, at least until one faces a [[Vanishing Gradient]].

The application of these models were accelerated in 2009 with the innovation of faster GPUs, allowing deep learning researchers *"to train networks 10 or 20 times faster"*.

After initial progress in 2009, where models were used for speech recognition, in 2012, many were already being deployed in phones. 

Interestingly, it was found that prior to training a model on smaller datasets, unsupervised pre-training, would prevent the problem of overfitting on a limited dataset.

> *Reminds of Transfer Learning or Fine tuning a model on a more niche dataset*

#### Convolutional Neural Networks

CNNs are used to learn from data that are in the form of arrays, such as RGB images. 

*"There are four key ideas behind ConvNets that take advantage of the properties of natural signals: local connections, shared weights, pooling and the use of many layers."*

And of course, the [[Convolution]]s themselves.

The architecture begins with a convolutional layer, where a [[convolution]] is applied to an input array to compute a weighted sum, using a matrix of shared weights called a filter, to then be applied to a non-linear activation function, such as [[ReLU]].

Each layer may use a different filter size depending on the intention

After each convolutional layer, a pooling layer is introduced to reduce the dimensionality of the output feature maps of a given layer through a $max$. Another filter is applied to a corresponding feature map, choosing the $max$ feature within the filter group and dropping the rest, ultimately reducing the feature size.

So just like a feedforward neural network, as a CNN gets deeper, it'll be able to capture more complex and specific features of a given sample given the opportunity to apply more convolution operations and pooling layers.

And taking more inspiration from the human brain, the architecture of a CNN resembles neuronal structures in the visual cortex.

CNNs are then use for various computer vision applications such as self-driving cars. Stacking a CNN alongside an RNN, then allows for a model to interpret an image and. then output a description to it.

The success of CNNs first came due to the introduction of GPUs into deep learning, efficient ReLU activations, and the use of dropout regularization. The success has then moved top companies, i.e., Nvidia, Intel, Samsung, etc to build CNN chpis to enable real-time comptuer vision capability.

#### Distributed Representations

An advantage of deep networks over classical ML is that they use distributed representations of data, meaning calculating the probability of a sample belonging to a class label[^1].

*"$2^n$ combinations are possible with $n$ binary features*

If you were to hypothetically feed a neural network a samples of, $[0,0,1]$, $[1,0,0]$, and $[0,1,1]$, as a byproduct, it'd also be able to learn the unseen probabilities of the remaining 5 possible combinations of features.[^1]

#### Recurrent Neural Nets

When backpropagation was first introduced, it was clear that it was to be extremely suitable for training RNNs while the only issue remaining was a vanishing or exploding gradient, changes in architecture were able to resolve those issues.

> *LSTMs and GRUs*

The advances in RNNs have then enabled the introduction of more complex tasks, such as translation from English to French.

This involves an encoder, encoding the idea or thought expressed by an english phrase, which is then fed into a decoder that outputs a probability distribution for a full French translation.

Another sick application is translating an image into a caption. This can be done through stacking a CNN as an encoder onto an RNN decoder.

The encoded image vector is fed into an RNN which then, similar to translation tasks, provides a full caption for a given image.

While an RNN is designed to learn temporal features, it's memory may not hold for prolonged periods of time. The idea to resolve this issue is an LSTM, that's essentially a type of hidden neuron which holds a memory cell that's able to store more long term information.

Other proposals such as Neural Turing Machines, resembling Alan Turing's concept of a Turing machine, and memory networks have been proposed to improve the 'memory' of an RNN.

#### The Future of Deep Learning

Unsupervised learning is expected to begin to take a larger role, as human and animal learning is primarily unsupervised proving to be efficient for learning.

Stacking different types of networks, such as CNNs and RNNs are promising for various vision and language applications. Introducing deep reinforcement learning has outperformed vision systems and classification tasks making them promising for a variety of applications.

Understanding Natural Language is a promising area within deep learning over the next few years, with an expectation for RNNs to understand sentences or entire documents.

> *This aged extremely well...*

---
**Thoughts / Questions / Action Items.**
- "*reconstructing brain circuits*", check out source 11 on the paper.
- when using sparse cross entropy given that you take in integer encoded labels, you'd take the argmax of the softmax activation and then use that as the parameter for the loss alongside the true labels. otherwise, then you wouldn't be able to learn, given that softmax outputs are from 0 to 1 and labels are from 0 to 9. this might've been why I couldn't implement sparse ce, right? will try this out if i get time.

[^1]: Confirm that it is right.
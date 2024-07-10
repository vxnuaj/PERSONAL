A type of machine learning model that learns to generate new data based on past samples.

They can learn to do so through supervised or unsupervised learning.

Some generative models are able to describe the underlying probability distribution of data, to generate new images while others are able to generate new examples without describing the distribution of data.

The SOTA generative models are able to generate distinct and unique images from samples, yet are still plausible to be identified as such samples

![[Screenshot 2024-07-05 at 10.57.39 AM.png]]

> *Note as each image of a cat is distinct, yet each is plausible to be identified as a cat.*
> *The same can be said for the images of buildings.*

They can also synthesize data under a constraint that some outputs are pre-determined, known as [[Conditional generation]].

Some models ( LLMs for instance ) are able to generate data so well that they seem intelligent. Albeit, they're purely determining the next token based on the statistics of language and aren't intelligent (yet).[^1]

Generative models exploit the fact that meaningful datapoints can be lower than the raw number of features.

The number of meaningful english sentences is lower than the amount of random sentences that can be made by drawing words at random.

Therefore, data can be described using a smaller amount of latent variables, given the smaller amount of meaningful english sentences.

Then, we can use deep learning models to describe the mapping between the latent variables and the data, through a latent representation which may take the form of weights.

1. Get Latent variables ( example, vector of RGB values for an image )
2. Learn latent representation ( through model weights )
3. Generation ( using latent representation or weights, to generate new images.)

This far, this is a form of unsupervised learning, where a model is trained to minimize a loss function. This might take the place of an encoder network.

Combining this with a form of supervised learning, we can learn to predict, as an example, images corresponding to a caption.

Rather than directly mapping the text to image directly, we can map the latent variables of the text to the latent variables of the image, through supervised learning.

Through this, we can learn the relationship between text / image pairs with fewer samples given a more direct mapping, are able to generate more plausible images, while still making them distinct through a degree of randomness.

This might take the form of a decoder network.


[^1]: Though doubt LLMs would be... [reasoning](https://vxnuaj.blog/p/cllm)
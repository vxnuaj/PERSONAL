Supervised learning are algorithms that learn based on an input set of labels. Where you're giving a model a set of examples, $X$, to learn from, and the correct label $Y$.

It's supervised, in the sense that the model is told what the correct $Y$ is post prediction, to allow it to learn from it.

The ultimate goal is to learn the best $\theta$ values, that effectively maps $X$ to $Y$.

$\theta$ is ideally also explanatory to be interpreted to generate relationships or insights between $X$ and $Y$, which can be possible in traditional machine learning models but more difficult in deep learning.

The focus, when training a model, to ensure it's effectiveness is on **performance metrics** that measure the quality of the model's predictions[^1]


Common applications are:

- Spam Filtering 
	- Input: Email -> Output: *Is it spam (binary)*
- Speech Recognition
	- Audio -> Transcripts
- Translation
	- English -> Spanish

Such can include *classification* whether it be multi-class or binary and *regression*.

Challenges that stem from supervised learning, are situations in which the desired output might me ambiguous to what one truly wants.

Examples may include translation, where there is no singular 'correct' translation or in image captioning where interpretation to a video can vary and be ambiguous.

In these situation a model must learn to find structure within data without a set of $Y$, to discover underlying patterns and structures, to help generate more coherent outputs.

This can be done through [[Unsupervised Learning]]

[^1]:   This is typically a loss function or accuracy score, but can take other means as well (f1-score, recall, etc )
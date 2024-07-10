**Bias** is the error in a model's prediction that occurs then a model is too simple to capture complex patterns and relationships in a dataset, where then the model predicts incorrect values and makes incorrect classifications.

If you have a high bias, you might need to train your model longer with adjusted learning rates, increase the model size (neural networks), and find other means to get your model to fit on your training set better.

**Variance** is the amount of which a model's predictions may vary when given new training or testing data. It measures how **variable** or **sensitive** the predictions of a model is to new data. A high variance may occur when a model too complex and overfitting to a training set, that it can't reliably make predictions on unseen data.

Increasing diversity in a training set can reduce the amount of variability in a model, leading to increased generalizability. One can also implement [[Regularization]].

In an ideal model, it has a low bias and low variability, improving generalizability and reducing the total error.

>$Total Error = Bias^2 + Variance + Bayes Error$[^1]


To find the the sweet spot, one can use [[Regularization]], [[boosting]], or [[bagging]]

[^1]: [[Bayes Error]] - wtf is this and the equation?? TODO.
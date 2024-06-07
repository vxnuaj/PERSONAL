Early stopping is a [[Regularization]] technique that prevents overfitting by iteratively checking the performance on a validation dataset and stopping training as the performance begins to decay.

While you want to optimize the cost function, you don't want your model to overfit and instead you want generalization (reducing variance)
	
	![[Screenshot 2024-06-04 at 4.11.55 PM.png | 400]]

>*While this method isn't as widely used, if L2 or L1 regularization or Dropout doesn't work, it's still a valid means to reduce overfitting.*

First, you split your dataset into:

1. Training Set

	The dataset used purely for training the model.

2. Validation Set

	The dataset used to tune hyperparameters

3. Test Set

	The dataset used to test the model, typically unseen data.

Second, you train your data and iteratively observe the training loss and the validation loss.

If the validation loss begins to decrease, whilst the training loss continues to increase, you must stop training your model as you've reached (or maybe surpassed) the optimal param combination.
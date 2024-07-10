We can use a model to accurately fit to a set of data, with a 100% accuracy.

The issue with this is that the model would likely do a horrible job at modelling unseen data. There'd be a lack of generalization. You've essentially overfit.

A means to mitigate this is to **test** a model on unseen data, prior to inference.

To do so, you'd split your dataset into training and test sets. 

The Training set would then be used to learn the optimal parameters, while the test set, being held as unseen data, would be used to evaluate the model using a variety of metrics (i.e., F1-Score, ROC-AUC, Accuracy, MSE,$R^2$, etc).

You want to make sure you avoid any type of data leakage, make sure your test data is always independent from the training data.

Then, at times we have [[Dev Sets]]

**Training sets** are used to train a model, **[[Dev Sets]]** are used to tune the model, **Test Sets** are used for final model evaluation.

The training set is typically the largest size while the [[Dev Sets]] and test sets smaller. The bigger your dataset is, the smaller % of the entire dataset a [[Dev Sets]] and test set will be.

**TLDR**
- Training Data is used to fit the model
- Dev Sets are used to test the model on a variety of hyperparameters.
- Test data is used to measure final performance, by predicting the label with a model, comparing the label with the real value, and then measuring the error (MSE, MAE, etc)
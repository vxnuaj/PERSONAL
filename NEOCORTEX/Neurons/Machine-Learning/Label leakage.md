Label leakage occurs when we train our model with data, *in this case labels*, that won't be available for our model during [[inference]].

Label leakage might give a model a boost whilst training but proves to be ineffective during inference as the model learns the incorrect parameters for making an accurate prediction without seeing the labels.

If a model learns to rely on the label values, rather than the actual features, it then learns to make predictions based on the label encoding rather than the underlying patterns in the dataset which is what we don't want. 

In a sense, a model learns to "cheat"

This then becomes a type of [[overfitting]] as it'll fail to generalize and adapt to real world data.

An effective way to avoid this is to make use of [[One hot encoding]], where representations of labels are in the form of a binary vector.
**Training sets** are used to train a model, **[[Dev Sets]]** are used to tune the model, **Test Sets** are used for final model evaluation.

The training set is typically the largest size while the [[Dev Sets]] and test sets smaller. The bigger your dataset is, the smaller % of the entire dataset a [[Dev Sets]] and test set will be.

When implementing train, dev, & test sets, it's important to make sure that they all come from the same / similar source so they have similar characteristics. 

For example, if one had a training set of high resolution cat images yet users used low resolution cat images from a phone, the model wouldn't be able to perform well on the users test set, leading to poor results and poor UX.

In certain applications, one might not need a Train / Dev / Test split but only a Train / Dev split, depending on the specific type of use case. But if the model needs to be able to generalize on unseen data, it's better to implement a test set to validate results or allow for empirical iterations.
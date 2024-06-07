Generalization is the means of a network being able to have a high inference accuracy on varied testing data, not overfitting to the previous training data.

There are multiple ways to improve generalization

**Datasets**
- Collecting more data allows for your model to learn from more datapoints allowing your model to generalize over more samples rather than overfitting on smaller sample sizes.
- [[Data Augmentation]] can help, by increasing varied samples to allowing for a model to predict remixes of a dataset (hence, more data).
- [[Label Smoothing]] 

**Architecture**
- Choosing the right [[Activation Function]]
- Choosing the right [[Weight Initialization]] strategies
- Adding [[Residual Layers]] or 'skip connections'
- Teacher and student networks, [[Knowledge Distillation]].

**Normalization**
- [[Z-Score Normalization]]
- [[BatchNorm]] and its variants
- [[Weight standardization]]
- [[Gradient Centralization]]

**Training Loops**

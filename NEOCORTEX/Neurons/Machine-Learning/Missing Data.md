Where data is missing, lol.

**Policies:**

- **Remove** the entire row, cleaning worry of the datapoint without guessing the random datapoint
	- Not applicable if too much data is missing features, only applicable when a small set of samples are missing features, or dataset can become biased
- **Impute** the data, meaning replace the missing features with the most common values or the average values across the sample or dataset
	- But then you have uncertainty in the model, where it might not be certain that that value might be the representative value.
- **Mask** the data, in the sense where you create a new category for samples with missing values. This then can allow for a model to learn from unknowns and categorize them into such, which can then provide more information in practice.
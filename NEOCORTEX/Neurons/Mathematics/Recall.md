A metric that computes how well a model finds the given label in question.

$Recall = \frac{Correct Positive Guesses}{All postive labels} = \frac{TP}{TP +FN}$

It answers, ***how accurate was the model, over all given labels relevant to the class?***

It is higher when a model is able to compute more labels as true correctly out of the entire repertoire of true labels.

Can be hacked by a model simply guessing everything as positive.
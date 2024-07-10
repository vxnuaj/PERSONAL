An metric, computed the same as accuracy, but denoting the accuracy for a specific class or label, purely based on the amount of computed positives whether they be false or true.

In summary, how accurate was the model ***when*** ***it actually made a prediction?***


It answers, *how good did you guess the given label?*

$Precision = \frac{Correct Positive Guesses}{Total Positive Guesses} = \frac{TP}{TP + FP}$

where $TP$ are true positives and $FP$ are false positives.

To optimize for precision, you'd want to maximize the amount of true correct answers computed for all correct answers computed falsely and truthfully.

Can be hacked if a model makes one $TP$ guess and no longer guesses more.
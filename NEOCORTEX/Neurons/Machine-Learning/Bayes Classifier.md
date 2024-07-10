The ideal gold-standard classifier, that is able to accurately denote the probability that a given sample $X$ belongs to a class $Y$.

$Pr(Y = j | X = x_0)$

This bayes classifier is under the assumption that we can compute the relationship or probability distribution between $X$ and $Y$ through an already defined and optimal function $f$.

The bayes classifier is the gold standard of which to measure towards, but we don't have knowledge of a function $f$ that maps $X$ to $Y$ prior and therefore computing the bayes classifier from the beginning is impossible, given that we can't compute the accurate probability that $Y = j$ without knowledge of a function $f$.

Ideally, through training a model, we aim to reach as equivalent performance as a bayes classifier would be, reaching near optimal accuracy ( barring the [[irreducible error]] / [[Bayes Error]] ).


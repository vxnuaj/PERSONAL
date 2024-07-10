The Frobenius Norm is defined very similarly to the [[Euclidean Norm]], but is instead utilized for matrices rather than pure vectors.

It's defined as $||W|| = \sum_i \sum_j w_{ij}^2$ , where instead of summing over singular scalars within a column or row vector, we sum over all columns and rows of a given matrix.

When computing the Frobenius norm for the loss, you compute the norm of all weight matrices for all layers $1 \rightarrow L$.
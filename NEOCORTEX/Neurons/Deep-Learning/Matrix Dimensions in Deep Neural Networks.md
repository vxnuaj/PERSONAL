#mathematics 

Typically, if $w_1$ is set to the dimensions of $(n_1, inputs)$, where $n_1$ is the number of neurons in a layer, the dimensions for the rest of the parameters can be set as:

$w^{[l]}: (n^{[l]}, n^{[l-1]})$
$b^{[l]}: (n^{[l]}, 1)$

and the dimensions of the gradients will the same as their respective parameters,

$dw^{[l]}: (n^{[l]}, n^{[l-1]})$
$db^{[l]}: (n^{[l]}, 1)$

where $l$ is the current layer.

Essentially, the dimensions of a given layer are defined as the first dimension being equivalent to the number of neurons in the current layer $(l)$ and the columns being equivalent to the number of neurons in the previous layer $(l-1)$

Now the dimensions of the [[weighted sum]], $Z^l$,

$Z^l =  W^lX + b^l$

are defined as:

$W^l : (n^{[l]}, n^{[l-1]})$
$X : (input features, m)$
$b^{[l]}: (n^{[l]}, 1)$

$Z^l : (n^{[l]}, m)$

The matrix multiplication of $W^l$ and $X$ yields the final dimensions of $Z^l$ as the first dimension being the number of neurons in the current layer and the second dimension being the total number of training samples.

The dimensions for $A^l$ are the same as $Z^l$ as the activation function is applied element wise.

Again, the gradients of each are the same as the original values.



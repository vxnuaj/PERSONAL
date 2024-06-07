#mathematics 
Forward propagation is the feeding forward an input sample into a neural network to get a final prediction based on that same input.

The mathematics, in the case of 2 layer neural network, is defined as:

***First layer:***

$Z_1 = W_1X + B_1$[^1]
$A_1 = g(Z_1)$

***Second layer:***

$Z_2 = W_2A_1 + B_1$[^1]
$A_2 = g(Z_2)$
$\hat{y} = A_2$

where,

- $W_j$ is the weighted matrix at $jth$ layer
- $B_j$ is the bias column vector at $jth$ layer
- $Z_j$ is the weighted sum at $jth$ layer
- $g()$ is the activation function of the model.
- $A_j$ is the activation matrix from the $jth$ layer

[^1]: You might need to transpose $W$ depending on how you initialize the shape of the matrix or the shape of your input, $X$ / $A_1$



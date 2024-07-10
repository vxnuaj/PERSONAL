Typically, having deeper layers in a neural network allows for the training of a model with more complex data while lowering the computational cost. Here, the depth of the network will be on the order of $O(logn)$, where the layers increase logarithmically to the number of input features $n$.

The inverse, having a shallow network, say $1$ layer, whilst inputting complex data into the model will require a model and it's computations to be increasingly complex with the weights increasing on the order of $O(2^n)$ as the input features increase.

As an example of $O(2^n)$, say we have a network with a hidden layer of 2 neurons.

As the number of input features increases, the number of weights will exponentially increase:

| n   | Weights |
| --- | ------- |
| 2   | 4       |
| 4   | 16      |
| 8   | 64      |
| 16  | 256     |
| 32  | 1024    |
| 64  | 4096    |
| 128 | 16384   |
| 256 | 65536   |
| 512 | 262144  |

and the number of bits representing the weights exponentially increase as well, then requiring an exponentially increasing computation power.
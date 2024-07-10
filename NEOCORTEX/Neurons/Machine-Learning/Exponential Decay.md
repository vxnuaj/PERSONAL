A means of [[Learning Rate Decay]] where the learning rate is minimized over time as:

$\alpha = \alpha \cdot e^{-k \cdot t}$

where $t$ is the current epoch or iteration and $k$ is the decay rate (a hyperparameter).

Make sure not to make $k$ too high as a model might actually stop learning


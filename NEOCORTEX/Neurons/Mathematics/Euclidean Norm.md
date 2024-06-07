The euclidean norm is a measure of the shortest length (magnitude) of a vector from the origin in a euclidean space. 

It's defined as $|| \vec{x}|| = \sqrt{\sum_i x_i^2} = \sqrt{x_1^2 + x_1^2 + ... x_n^2 }$ 

Essentially, it defines the distance of the end of a vector (the point) from the origin.

In machine learning, the euclidean norm is used as a regularization term with a slight adjustment of cancelling out the square root of the original definition of the euclidean norm.

It's defined as:

$||\vec{x}||^2 = x_1^2 + x_1^2 + ... x_n^2$

where $||\vec{x}||^2$ is the sum of a squared parameter, typically $w$ and maybe $b$.

> *You aren't squaring $||\vec{x}||^2$ again, the $^2$ merely indicates that it's the sum of squared terms.*
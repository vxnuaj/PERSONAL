### beauty of linalg

If $x_r$ and $x_r'$ are vectors such that

$$
A x_r = b
$$
$$
A x_r' = b
$$

then 

$$
A x_r - A x_r' = b - b = 0
$$

so 

$$
A(x_r - x_r') = 0
$$

Therefore, $x_r - x_r'$ is in the nullspace of $A$.

If $A$ is full-rank, then $x_r$ and $x_r'$ must be the same for this to hold true.

Assuming $A$ is full-rank, given $Ax_r = Ax_r^'$ and the difference, $x_r - x_r'$, is in the nullspace, but $x_r$ and $x_r'$ also come from the rowspace, the difference $x_r - x_r'$ must be the zero vector, as the nullspace and the rowspace are perpendicular, only intersecting at $0$.

Otherwise, if $A$ is dependent as there are different $x_r$ and $x_r'$ that yield the same $b$ due to free variables, then there is a non-trivial solution to the system $A x = 0$, which can be defined by $x_r - x_r'$.





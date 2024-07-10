To find the determinant of a $2, 2$ matrix you subtract the product of the top left and lower right with the product of the top right and lower left.

$A = \begin{bmatrix} a, b \\ c, d \end{bmatrix}$

$det(A) = ad - bc$

To find the determinant of a $3, 3$ matrix, you take each value in the first row and multiply it by determinant of the remaining rows, barring the column that the value in the first row was in when taking the determinant of the remaining rows.

Then the multiplication, done for each value in the first row (so $3$) is then added or subtracted, done in an alternating fashion.

This process is called a co-factor expansion or [[Laplace Expansion]]

$\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = a \cdot \det\begin{pmatrix} e & f \\ h & i \end{pmatrix} - b \cdot \det\begin{pmatrix} d & f \\ g & i \end{pmatrix} + c \cdot \det\begin{pmatrix} d & e \\ g & h \end{pmatrix}$

$\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix} = 1 \cdot (1 \cdot 0 - 4 \cdot 6) - 2 \cdot (0 \cdot 0 - 4 \cdot 5) + 3 \cdot (0 \cdot 6 - 1 \cdot 5)$

This determinant can define multiple things, one of them being the invertibility of a matrix.

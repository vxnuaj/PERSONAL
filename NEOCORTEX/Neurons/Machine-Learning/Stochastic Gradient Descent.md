A form of [[Gradient Descent]], which instead of processing an entire dataset at once (through vectorization), it processes the dataset with a mini-batch size of a single sample.

>*This is commonly known as online gradient descent*

The downside to this is it essentially takes up too much time, taking away the speed benefits of introducing vectorization as you process data a single sample at a time.
	
	![[Screenshot 2024-06-08 at 8.37.01 AM.png | 400]]

What works better is [[Mini-Batch Gradient Descent]]
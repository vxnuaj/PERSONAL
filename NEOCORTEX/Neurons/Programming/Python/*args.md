_*args_ allows us to pass a [[variable number of arguments]] to a function. 

The * indicates that the function can accept any number of arguments which are collected into a tuple.

As an example:

```
def my_function(*args):
	print(args) 
	
my_function(1, 2, 3, 4, 5)

# Output: (1, 2, 3, 4, 5)
```

We can also input a list as:

```
def my_function(*args): 
	print(args) 
	
my_function([1, 2, 3], 4, 5)

# Output: ([1, 2, 3], 4, 5)
```
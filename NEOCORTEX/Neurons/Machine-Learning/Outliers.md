An observation in data that heavily deviates from other observations.

These observations don't accurately represent the phenomenon being explained through the model, typically.

They can heavily skew the results of a model if not dealt with accordingly.

Of course, some outliers do represent valuable information and can provide insights into a set of datapoints.

**Visualization:**
Outliers and can be visualized and found through a variety of means.

- Plots - [[Histogram]], [[Density Plot]], box plots
- Statistics - [[Interquartile Range]], Standard Deviation
- Residuals - [[Standardized Residuals]], [[Deleted Residuals]], [[Studentized Residuals]].

**Policies:**
- **Remove**
- **Assign** to the mean or median value
- **Transform** the value -- perhaps using a [[Log Transformation]]
- **Predict** what the value should be
	- By similar values
	- Using regression
- **Keep them**, but focus on models that are resistant to outliers.
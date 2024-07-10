When in a repository of data, there are duplicate datapoints.

Depending on the context, you might want to remove it or keep it.

- If you were using the Iris dataset and encountered multiple same datapoints, you might want to keep it as the same phenomenon can happen in the wild
- If you're classifying images and have 2 of the same datapoints, you might not want duplicates, as there's no need to have 2 of the same images and unlikely to occur in real scenarios.
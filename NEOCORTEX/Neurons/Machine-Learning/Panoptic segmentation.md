Panoptic segmentation combines the approach of [[Semantic segmentation]] and [[Instance segmentation]] by assigning a class label to each pixel in an image, but also identifies and separates the instances / objects within an image to a given class.

Panoptic segmentation, despite classifying instances into similar classes, also assigns a unique identifies to instances / objects within a class, differentiating objects within a class as well.

So, it includes:

- Class Labels, where each pixel is assigned a class label
- Instance labels, where each instance is assigned to a class.
- Instance Identifiers, where each instance has a unique identifier despite being within the same class.
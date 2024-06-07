---
title: 'DRNNs for EEG Analysis'
date: '2024-02-11'
current: false
---

**[Github](https://github.com/vxnuaj/DRNN-EEG) · [Article](https://medium.com/intuition/deep-recurrent-neural-networks-for-electroencephalography-analysis-7c428c50f038)**

EEG based diagnostics present many limitations in terms of attaining a high signal-to-noise ratio.

Therefore, EEG data can be prone to misinterpretation inadvertently leading to opportunities for **misdiagnosis**

Taking epilepsy as an example, erroneous readings of EEG data based on a [false classification of *wicket spikes*](https://www.researchgate.net/publication/5588163_Errors_in_EEG_Interpretation_and_Misdiagnosis_of_Epilepsy), a lack of experience in EEG analysis, and the lack of a gold universal standard for EEG diagnostics, make things extremely difficult for neurologists.

There appears to be about a **21% probability** that an EEG reading is misinterpreted, which then leads to patients suffering from adverse consequences such as restricted driving, unneccesary treatment costs ($10k+), unemployment, and much more.

I decided to look into the use of recurrent neural networks, given their ability to process temporal data, and convolutional neural networks, given their ability to process spatial data, to classify normal and abnormal EEG signals.

>*This would potential mitigate the misdiagnosis rate and also allow for a lighter workload on a given neurologist*

I found and replicated [ChronoNet](https://arxiv.org/abs/1802.00308), a deep recurrent neural network taking inspiration from inception networks and DenseNet to classify abnormal EEG.


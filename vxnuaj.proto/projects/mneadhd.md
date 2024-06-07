---
title: 'MNE-ADHD'
date: '2023-12-28'
current: false
---
**[Github](https://github.com/vxnuaj/mne-adhd) · [Article](https://medium.com/@vxnuaj/using-mne-to-characterize-adhd-d5540438dcf3)**

I was curious to learn more about the effectivness of **neurofeedback** to detect and improve the lives of people with ADHD.

Traditional treatment, such as medication, can be detrimenatal to a patient. 

A patient I'd interview mentioned that her usage of medications made her feel as if she lost a portion of herself and her creativity.

EEG, tracking brainwaves through electrodes, allows for the calculation of the _theta:beta_ ratio, which is able to characterize ADHD.

I used [MNE-Python](https://mne.tools/stable/index.html) to characterize the significance of ADHD on a given dataset representable of ADHD patients.

This involved the use of the Fast Fourier Transform (FFT), Independent Component Analysis (ICA), Epoching, and other methodologies.

Ultimatey, the ADHD group revealed a high theta:beta band ratio, indicating that it may be correlating to ADHD-like symptoms based on the EEG.
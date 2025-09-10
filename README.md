# Kidney Disease Staging using Deep Learning and Ensemble ML

## Overview

This project develops an automated pipeline for **chronic kidney disease (CKD) stage classification** using medical imaging data, specifically **ultrasound and CT kidney images**. The approach combines **deep learning-based feature extraction** with advanced **ensemble machine learning models** for robust and interpretable kidney disease staging.

---

## Features

- **Deep Learning Frameworks:** Implement feature extraction using TensorFlow and PyTorch deep convolutional neural networks (CNNs).
- **Medical Image Handling:** Use OpenCV, pydicom, and NiBabel for preprocessing and managing ultrasound and CT image data formats.
- **Ensemble ML Classification:** Employ Random Forest, XGBoost, and LightGBM for stage classification based on extracted imaging features.
- **Model Evaluation & Interpretability:** Evaluate models using scikit-learn metrics; apply SHAP (SHapley Additive exPlanations) for explainability.
- **Dataset Support:** Supports large kidney ultrasound datasets (e.g., Open Kidney Dataset), including metadata for multi-vendor ultrasound imaging.

---

## Installation

1. Clone the repository:

2. Create and activate a Python virtual environment:

3. Install dependencies:

---

## Usage

### Data Preparation
- Load ultrasound and CT images using `pydicom` and `NiBabel`.
- Preprocess images with `OpenCV` (resize, normalize, denoise).
- Organize dataset folders with images and labels.

### Feature Extraction
- Run deep CNN models (TensorFlow/PyTorch) to extract features from images.
- Save features to disk or pass directly to classifier modules.

### Classification & Evaluation
- Train ensemble classifiers (Random Forest, XGBoost, LightGBM) on extracted features.
- Evaluate models on validation/testing datasets.
- Use SHAP for interpretability and visualization of feature importance.

Example command:

---

## Datasets

- **Open Kidney Dataset:** Over 500 annotated ultrasound kidney images.
- Other supplementary datasets for kidney CT or ultrasound images (please register separately if required).

---

## Project Structure


---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

- Developer: K.Murari Tej 
- Email: tejmurari@gmail.com 
- GitHub: [yourusername](https://github.com/tej/1234-1)  

---

## Acknowledgments

- Thanks to the creators of the Open Kidney Dataset and other public medical imaging datasets.  
- Special thanks to the open-source communities of TensorFlow, PyTorch, scikit-learn, SHAP, OpenCV, and NiBabel.  -

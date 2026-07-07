# Data Science & Machine Learning Projects

A portfolio of end-to-end data science, machine learning, and analytics projects by **Princess Deladem Dagadu** — Data & Marketing Analyst based in Berlin, Germany.

Each notebook covers a full workflow: data cleaning, exploration, modeling, and evaluation.

> **Portfolio:** [wwwdelademdagadu.com) · **LinkedIn:** [/in/princessdelademdagadu](https://linkedin.com/in/princessdelademdagadu)

---

## Projects

### 1. Deep Learning Pipeline for Pneumonia Detection
Convolutional neural network that classifies chest X-ray images as pneumonia vs. normal. Covers image preprocessing and resizing, data augmentation to handle class imbalance, a CNN built in TensorFlow/Keras, and evaluation with accuracy, precision/recall, and a confusion matrix.
- **Result:** [X]% test accuracy / [X] recall, prioritizing recall to minimize missed positive cases.
- **Stack:** Python, TensorFlow/Keras, NumPy, Matplotlib
- [View notebook](./Deep%20Learning%20Pipeline%20for%20Pneumonia%20Detection.ipynb)

### 2. Binary Sentiment Analysis using NLP Models
Classifies text as positive or negative sentiment. Includes text cleaning (tokenization, stop-word removal, lemmatization), TF-IDF vectorization, and a comparison of multiple models (Logistic Regression, Naive Bayes, SVM).
- **Result:** best model reached [X]% accuracy / [X] F1, with error analysis of misclassified reviews.
- **Stack:** Python, scikit-learn, NLTK, Pandas
- [View notebook](./Binary%20Sentiment%20Analysis%20using%20NLP%20Models%20.ipynb)

### 3. Customer Behavior Analysis & Personalization (Fashion E-Commerce)
Analyzes shopping behavior for a fashion e-commerce platform to drive personalized product recommendations. Includes exploratory analysis of purchase patterns, customer segmentation, and a recommendation approach for surfacing relevant items.
- **Result:** identified [N] distinct customer segments and a personalization strategy to lift engagement/conversion.
- **Stack:** Python, Pandas, scikit-learn, Matplotlib/Seaborn
- [View notebook](./Customer%20Behavior%20Analysis%20and%20Personalization%20for%20a%20Fashion%20E-Commerce%20Platform.ipynb)

### 4. End-to-End Machine Learning Pipeline
A reproducible ML workflow from raw data to a trained model: data cleaning, feature engineering, preprocessing with scikit-learn `Pipeline`/`ColumnTransformer`, model training, hyperparameter tuning, and evaluation.
- **Result:** final model scored [X metric], packaged so the same steps run consistently on new data.
- **Stack:** Python, scikit-learn, Pandas
- [View notebook](./End_to_end_Machine_Learning_Pipeline.ipynb)

### 5. Exploratory Data Analysis: Classic Cars for Restoration & Auction
EDA on a classic-car dataset to inform restoration and auction decisions. Explores distributions, correlations, and value drivers (year, make, condition, mileage) using visualization to surface actionable pricing insights.
- **Result:** identified the top [N] factors most associated with auction value and clear restoration-vs-value trade-offs.
- **Stack:** Python, Pandas, Matplotlib/Seaborn
- [View notebook](./Exploratory_Data_Analysis_of_Classic_Cars_for_Restoration_and_Auction.ipynb)

---

## Tech Stack

**Languages & Tools:** Python, SQL, Jupyter, Git
**Data & ML:** Pandas, NumPy, scikit-learn, TensorFlow/Keras, NLTK
**Visualization & BI:** Matplotlib, Seaborn, Tableau, Power BI

## How to Run

```bash
# Clone the repo
git clone https://github.com/delademdagadu/Projects.git
cd Projects

# (Optional) create a virtual environment
python -m venv venv
source venv/bin/activate        # on Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Launch Jupyter
jupyter notebook

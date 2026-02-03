#import necessary libraries
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.metrics import log_loss
from sklearn.metrics import confusion_matrix
from sklearn.datasets import make_classification
from sklearn.metrics import classification_report
from sklearn.metrics import precision_recall_curve
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score ,precision_score ,recall_score
from sklearn.metrics import f1_score , roc_auc_score ,average_precision_score

sns.set()
%matplotlib inline
plt.style.use("seaborn-v0_8-whitegrid")

income_df = pd.read_csv("Housing Affordability\data\Income.csv")
housing_df = pd.read_csv("Housing Affordability\data\ShelterCosts.csv")

import warnings
# For Ignore all warnings
warnings.filterwarnings('ignore')
# For Ignore all FutureWarning messages
warnings.simplefilter(action='ignore', category=FutureWarning)


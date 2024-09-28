import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the CSV file
data = pd.read_csv('Melbourne_housing_formatted_latlong_price.csv')

# Clean 'Price' column (remove dollar signs, commas, and convert to numeric)
data['Price'] = data['Price'].replace({'\$': '', ',': ''}, regex=True)
data['Price'] = pd.to_numeric(data['Price'], errors='coerce')

# Drop rows where Price is NaN, since we can't categorize them
data = data.dropna(subset=['Price'])

# Fill missing values with the median for numerical columns
data['Landsize'] = data['Landsize'].fillna(data['Landsize'].median())
data['BuildingArea'] = data['BuildingArea'].fillna(data['BuildingArea'].median())
data['Car'] = data['Car'].fillna(data['Car'].median())

# Filter dataset to include only valid bedroom numbers (up to 8)
filtered_data = data[data['Bedroom'] <= 8]

# Create the boxplot of Price vs Number of Bedrooms without PriceCategory hue
plt.figure(figsize=(12, 6))
sns.boxplot(x='Bedroom', y='Price', data=filtered_data, palette="Set2")
plt.title('Boxplot of House Prices by Number of Bedrooms')
plt.xlabel('Number of Bedrooms')
plt.ylabel('Price (in AUD)')
plt.show()

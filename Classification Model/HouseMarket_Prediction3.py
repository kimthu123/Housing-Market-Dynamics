import pandas as pd
import matplotlib.pyplot as plt

# Load the CSV file
data = pd.read_csv('Melbourne_housing_formatted_latlong_price.csv')

# Clean 'Price' column (remove dollar signs, commas, and convert to numeric)
data['Price'] = data['Price'].replace({'\$': '', ',': ''}, regex=True)
data['Price'] = pd.to_numeric(data['Price'], errors='coerce')

# Drop rows where Price is NaN
data = data.dropna(subset=['Price'])

# Create a histogram for house prices
plt.figure(figsize=(10, 6))
plt.hist(data['Price'], bins=30, edgecolor='black')

# Adding a title and labels
plt.title('Distribution of House Prices', fontsize=16)
plt.xlabel('Price (in AUD)', fontsize=12)
plt.ylabel('Number of Houses', fontsize=12)

# Show the plot
plt.show()

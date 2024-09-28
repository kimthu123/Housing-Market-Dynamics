import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the CSV file
data = pd.read_csv('Melbourne_housing_formatted_latlong_price.csv')

# Clean 'Price' column (remove dollar signs, commas, and convert to numeric)
data['Price'] = data['Price'].replace({'\$': '', ',': ''}, regex=True)
data['Price'] = pd.to_numeric(data['Price'], errors='coerce')

# Drop rows where Price or BuildingArea is NaN, since these are necessary for the scatter plot
data = data.dropna(subset=['Price', 'BuildingArea'])

# Create a scatter plot
plt.figure(figsize=(10, 6))
sns.scatterplot(x='BuildingArea', y='Price', data=data)

# Adding a title and labels
plt.title('Scatter Plot of House Prices by Building Area (Price Classification)', fontsize=16)
plt.xlabel('Building Area (in sqm)', fontsize=12)
plt.ylabel('Price (in AUD)', fontsize=12)

# Show the plot
plt.show()

🏠 Housing Market Dynamics

A full-stack web application for analyzing and predicting housing prices using Machine Learning.

📌 Overview

Housing Market Dynamics is a web platform that allows users to explore, analyze, and predict housing market trends. Built with a React.js front end and FastAPI back end, the application integrates a machine learning model to deliver real-time predictions of housing prices.

The project combines data visualization, AI, and responsive UI design to provide insights into property values and market performance across regions.

🚀 Features

🏘 Property Listings – View and manage property details such as price, location, type, and features.

📊 Interactive Visualizations – Charts and graphs built with D3.js/Chart.js for market trends, distribution, and price insights.

🤖 AI-Powered Predictions – Integrated ML model to predict housing prices based on user inputs.

🔐 Authentication – User login and signup functionality.

⚡ Full-Stack Integration – React front end connected to FastAPI back end for seamless data flow.

✔ Robust Design – Error handling, input validation, and responsive UI.

🛠 Tech Stack

Frontend: React.js, JavaScript, HTML, CSS
Backend: FastAPI (Python)
Machine Learning: scikit-learn, pandas, numpy
Visualization: D3.js, Chart.js, Matplotlib
Database: SQLite / JSON (for prototype stage)
Other Tools: Git, Agile workflow, VS Code

📂 Project Structure
housing-market-dynamics/
│
├── frontend/              # React front end (UI components, charts, forms)
│   ├── src/components/    
│   └── src/pages/         
│
├── backend/               # FastAPI back end
│   ├── main.py            # API routes
│   ├── models/            # ML model integration
│   └── database/          
│
├── ml/                    # Machine learning scripts (data preprocessing, training)
│
└── README.md              # Project documentation

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/yourusername/housing-market-dynamics.git
cd housing-market-dynamics

2. Setup Backend (FastAPI)
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

3. Setup Frontend (React)
cd frontend
npm install
npm start


The app will run on http://localhost:3000
 and connect to FastAPI backend on http://localhost:8000
.

📊 Example Visualizations

Price distribution histograms

Suburb-wise average prices

Scatter plots for size vs price

Predicted vs actual price comparison

👥 Team & Contributions

Developed as a group project by:

Kim Thu Tran

Mai Tien Dat Tran

Trong Hoang Nam Quang

All members contributed equally in front end, back end, and ML model integration following Agile principles.

🎯 Learning Outcomes

Applied full-stack development (React + FastAPI).

Gained hands-on experience with machine learning integration in production-like environment.

Strengthened team collaboration, Agile workflow, and software engineering practices.

📌 Future Improvements

Deploy on cloud (AWS/Azure) with Docker & Kubernetes.

Enhance ML model accuracy with more datasets.

Add CI/CD pipelines and monitoring tools.

Improve UI with more interactive filters and visualizations.

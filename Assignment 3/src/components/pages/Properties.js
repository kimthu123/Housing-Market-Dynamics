import React from 'react';
import PropertyList from '../components/PropertyList';
import PropertyForm from '../components/PropertyForm';
import DataVisualization from '../components/DataVisualization';
import Header from '../components/Header';  // Import the Header component
import Footer from '../components/Footer';  // Import the Footer component

const Properties = () => {
  return (
    <div>
      {/* Include Header at the top */}
      <Header />

      <main>
        <h1>Properties</h1>
        <PropertyForm />       {/* Form for user input */}
        <PropertyList />       {/* List of properties */}
        <DataVisualization />  {/* Data visualization charts */}
      </main>

      {/* Include Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Properties;

import React from 'react';
import PropertyCard from './PropertyCard';
import Header from './Header';  // Import the Header component
import Footer from './Footer';  // Import the Footer component
import './PropertiesPage.css';  // For the page's styles

const propertiesData = [
  {
    id: 1,
    image: 'path_to_image1',  // Replace with your image path
    title: 'Knockdown-Rebuild for Profit',
    price: '$1.410m',
    location: 'City fringe, walk to everything',
    scope: 'Single Home/Site',
    profit: '$0.490m',
    returnOnCash: 45,
  },
  {
    id: 2,
    image: 'path_to_image2',  // Replace with your image path
    title: 'Lux Long Settlement Duplex',
    price: '$1.750m',
    location: 'Quiet, family-focused area',
    scope: 'Build 2 large, street-facing houses',
    profit: '$0.860m',
    returnOnCash: 54,
  },
  {
    id: 3,
    image: 'path_to_image3',  // Replace with your image path
    title: '4 Townhouses on 2 Titles',
    price: '$2.200m',
    location: 'School zone, high demand',
    scope: 'Develop 4 large, street-facing houses',
    profit: '$1.347m',
    returnOnCash: 57,
  }
];

const PropertiesPage = () => {
  return (
    <div className="properties-page">
      <h1>Discover Your Investment Property Today</h1>
      <p>Explore some current purchase opportunities below:</p>
      <div className="property-list">
        {propertiesData.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;

import React from 'react';
import './PropertyCard.css';  // Assuming you're adding specific styles for the card

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>Price: {property.price}</p>
      <p>Location: {property.location}</p>
      <p>Scope: {property.scope}</p>
      <p>Profit: {property.profit}</p>
      <p>Return on Cash: {property.returnOnCash}%</p>
    </div>
  );
};

export default PropertyCard;

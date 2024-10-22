import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/api/properties')
      .then(response => setProperties(response.data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <ul>
      {properties.map((property) => (
        <li key={property.id}>
          {property.name} - ${property.price}
        </li>
      ))}
    </ul>
  );
};

export default PropertyList;

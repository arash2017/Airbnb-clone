//import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price} per night</p>
      <p>Rating: {property.rating} ({property.reviews} reviews)</p>
    </div>
  );
};

export default PropertyCard;


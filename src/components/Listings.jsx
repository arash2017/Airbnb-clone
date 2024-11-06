//import React from 'react';
import { propertyListings } from '../data';
import PropertyCard from './PropertyCard';

const Listings = ({ searchQuery }) => {
  const filteredListings = propertyListings.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return (
      <div className="listings">
        {filteredListings.map(property => (
             <PropertyCard key={property.id} property={property} />
       ))}
      </div>
    );
  };
  
  export default Listings;
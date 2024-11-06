//import React from 'react';
import  { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import axios from 'axios';

const Listings = ({ searchQuery }) => {
  const [propertyListings, setPropertyListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from JSONPlaceholder
    const fetchListings = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // Map response to resemble our property format
        const listings = response.data.slice(0, 8).map((post, index) => ({
          id: post.id,
          title: `Property ${index + 1}: ${post.title}`,
          description: `Description for property ${index + 1}.`,
          price: Math.floor(Math.random() * 200) + 50,
          rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1), // Random rating between 3.5 to 5
          reviews: Math.floor(Math.random() * 200) + 50,
          image: `/houses/house${(index % 8) + 1}.svg`, // Local SVG as the image source
        }));
        setPropertyListings(listings);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch property listings. ', error);
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  // Filter listings based on search query
  const filteredListings = propertyListings.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="listings">
      {filteredListings.length > 0 ? (
        filteredListings.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      ) : (
        <p>No properties found for `{searchQuery}`</p>
      )}
    </div>
  );
};

export default Listings;
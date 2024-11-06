import { useState } from 'react'
import './App.css'
import Listings from './components/Listings'
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]); // [min, max] price
  const [rating, setRating] = useState(0); // Minimum rating
  console.log('priceRange in App.jsx',priceRange);;
  return (
    <>
     <header className="App-header">
        <h1>Property Listings</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filters
          priceRange={priceRange} setPriceRange={setPriceRange}
          rating={rating} setRating={setRating}
         
        />
        <Listings searchQuery={searchQuery}
         priceRange={priceRange}
         rating={rating}
      
        />
      </header>
    </>
  )
}

export default App

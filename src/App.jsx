import { useState } from 'react'
import './App.css'
import Listings from './components/Listings'
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import NavBar from './components/NavBar';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]); // [min, max] price
  const [rating, setRating] = useState(0); // Minimum rating
  console.log('priceRange in App.jsx',priceRange);;
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Add NavBar to the top of the app */}
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Property Listings</h1>
                  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                  <Filters
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    rating={rating}
                    setRating={setRating}
                  />
                  <Listings searchQuery={searchQuery} priceRange={priceRange} rating={rating} />
                </>
              }
            />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App

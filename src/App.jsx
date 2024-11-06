import { useState } from 'react'
import './App.css'
import Listings from './components/Listings'
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
     <header className="App-header">
        <h1>Property Listings</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Listings searchQuery={searchQuery} />
      </header>
    </>
  )
}

export default App

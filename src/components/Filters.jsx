
const Filters = ({ priceRange, setPriceRange, rating, setRating }) => {
  return (
    <div className="filters">
      {/* Price Range Slider */}
      <div>
        <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
        <input
          type="range"
          min="0"
          max="300"
          step="10"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        />
      </div>

      {/* Minimum Rating Dropdown */}
      <div>
        <label>Minimum Rating:</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={0}>Any</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={4.5}>4.5 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>

      
    </div>
  );
};

export default Filters;

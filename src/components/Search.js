import React from 'react';
import './Search.css';

function SearchComponent({ query, setQuery, fetchCities, searchResults, onSelectCity }) {
  return (
    <div className='search-container'>
      <div className='input-container'>
        <input 
          type="text" 
          data-testid="search-input" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button data-testid="search-button" onClick={fetchCities}>
          Search
        </button>
      </div>
      {searchResults.length > 0 && 
        <div data-testid="search-results" className='search-results'>
          {searchResults.map((city) => (
            <div 
              className='search-result'
              key={`${city.lat}-${city.lon}`} 
              onClick={() => onSelectCity(city)}
            >
              <span className='city-name'>{city.name}</span>
              <span className='city-location'>{city.lat}, {city.lon}</span>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default SearchComponent;

import React from 'react';
import './Search.css';

function SearchResults({ searchResults, onSelectCity }) {
  return (
    searchResults.length > 0 && (
      <div data-testid="search-result" className='search-results'>
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
    )
  );
}

export default SearchResults;

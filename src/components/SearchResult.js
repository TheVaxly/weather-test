import React from 'react';

function SearchResults({ searchResults, onSelectCity }) {
  return (
    <div data-testid="search-results">
      {searchResults.map((city) => (
        <div 
          key={`${city.lat}-${city.lon}`} 
          onClick={() => onSelectCity(city)}
        >
          {city.name}, {city.lat}, {city.lon}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
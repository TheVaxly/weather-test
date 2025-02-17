import React from 'react';

function Search({ query, setQuery, fetchCities }) {
  return (
    <div>
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
  );
}

export default Search;

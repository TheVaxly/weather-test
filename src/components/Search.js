import React from 'react';
import './Search.css';

function Search({ query, setQuery, fetchCities }) {
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
    </div>
  );
}

export default Search;

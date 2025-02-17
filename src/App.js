import './App.css';
import { useState } from 'react';
import { createMockServer } from './createMockServer';
import SearchComponent from './components/Search';
import SelectedCities from './components/SelectedCities';

createMockServer();

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const fetchCities = () => {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`)
      .then((response) => response.json())
      .then((cities) => {
        setSearchResults(
          cities.map((city) => ({
            name: city.name,
            country: city.country,
            lat: city.lat,
            lon: city.lon,
          }))
        );
      });
  };

  const handleSelectCity = (city) => {
    setSelectedCities((prevSelected) => [city, ...prevSelected]);
    setSearchResults([]);
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <SearchComponent 
        query={query} 
        setQuery={setQuery} 
        fetchCities={fetchCities} 
        searchResults={searchResults} 
        onSelectCity={handleSelectCity} 
      />
      <SelectedCities selectedCities={selectedCities} />
    </div>
  );
}

export default App;

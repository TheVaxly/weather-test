import './App.css';
import { useState } from 'react';
import { createMockServer } from './createMockServer';
import Search from './components/Search';
import SearchResults from './components/SearchResult';
import SelectedCities from './components/SelectedCities';

createMockServer();

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const fetchCities = () => {
    fetch(`https://openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=439d4b804bc8187953eb36d2a8c26a02`)
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
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <Search query={query} setQuery={setQuery} fetchCities={fetchCities} />
      <SearchResults searchResults={searchResults} onSelectCity={handleSelectCity} />
      <SelectedCities selectedCities={selectedCities} />
    </div>
  );
}

export default App;
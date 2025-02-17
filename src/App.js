import './App.css';
import { useState } from 'react';
import { createMockServer } from './creatMockServer';

createMockServer();

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  const inputChange = (e) => {
    setQuery(e.target.value);
  };

  const buttonClickHandler = async () => {
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

  const selectedCityHandler = (city) => {
    setSelectedCity([city, ...selectedCity]);
  }
  return (
    <div className="App">
      <h1>Weather Application</h1>
      <input type="text" data-testid="search-input" value={query} onChange={inputChange} />
      <button data-testid="search-button" onClick={buttonClickHandler}>Search</button>

      <div data-testid="search-results">
        {searchResults.map((city) => (<div key={'${city.lat}-${city.lon}'} onClick={() => selectedCityHandler(city)}>{city.name}</div>))}
      </div>

      <div data-testid="my-weather-list">
        {selectedCity && selectedCity.map((city) => (<div key={'${city.lat}-${city.lon}'}>{city.name}</div>))}
      </div>
    </div>
  );
}

export default App;
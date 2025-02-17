import React from 'react';
import WeatherCard from './WeatherCard';

function SelectedCities({ selectedCities }) {
  return (
    <div data-testid="my-weather-list">
      {selectedCities.map((city) => (
        <WeatherCard key={'${city.lat}-${city.lon}'} city={city} />
      ))}
    </div>
  );
}

export default SelectedCities;

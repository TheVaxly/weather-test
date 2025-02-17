import React from 'react';

function SelectedCities({ selectedCities }) {
  return (
    <div data-testid="my-weather-list">
      {selectedCities.map((city) => (
        <div key={`${city.lat}-${city.lon}`}>
          {city.name}
        </div>
      ))}
    </div>
  );
}

export default SelectedCities;

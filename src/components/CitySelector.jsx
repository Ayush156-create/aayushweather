import React from 'react'
import { popularCities } from '../services/weatherService'
import './CitySelector.css'

const CitySelector = ({ selectedCity, onCityChange, onCurrentLocation, loadingLocation }) => {
  return (
    <div className="city-selector">
      <div className="selector-header">
        <h3>Select Location</h3>
      </div>

      <div className="selector-controls">
        <select 
          value={selectedCity} 
          onChange={(e) => onCityChange(e.target.value)}
          className="city-dropdown"
        >
          <option value="">Choose a city...</option>
          {popularCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button 
          onClick={onCurrentLocation}
          disabled={loadingLocation}
          className="location-btn"
        >
          {loadingLocation ? (
            <>
              <span className="btn-spinner"></span>
              Getting Location...
            </>
          ) : (
            <>
              📍 Use My Location
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default CitySelector

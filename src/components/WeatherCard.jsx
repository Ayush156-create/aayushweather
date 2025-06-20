import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({ weather, loading, error }) => {
  if (loading) {
    return (
      <div className="weather-card loading">
        <div className="loading-spinner"></div>
        <p>Loading weather data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="weather-card error">
        <div className="error-icon">⚠️</div>
        <p>{error}</p>
      </div>
    )
  }

  if (!weather) {
    return (
      <div className="weather-card empty">
        <p>No weather data available</p>
      </div>
    )
  }

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': '☀️', '01n': '🌙',
      '02d': '⛅', '02n': '☁️',
      '03d': '☁️', '03n': '☁️',
      '04d': '☁️', '04n': '☁️',
      '09d': '🌧️', '09n': '🌧️',
      '10d': '🌦️', '10n': '🌧️',
      '11d': '⛈️', '11n': '⛈️',
      '13d': '❄️', '13n': '❄️',
      '50d': '🌫️', '50n': '🌫️'
    }
    return iconMap[iconCode] || '🌤️'
  }

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <div className="weather-icon-large">
          {getWeatherIcon(weather.weather[0].icon)}
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{Math.round(weather.main.temp)}</span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="weather-description">
          {weather.weather[0].description}
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels like</span>
          <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{weather.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{weather.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard

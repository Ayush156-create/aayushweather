import React, { useState, useEffect } from 'react'
import WeatherCard from '../components/WeatherCard'
import CitySelector from '../components/CitySelector'
import { weatherService } from '../services/weatherService'
import { localStorageService, STORAGE_KEYS } from '../utils/localStorage'
import './Home.css'

const Home = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [loadingLocation, setLoadingLocation] = useState(false)

  // Load saved preferences on component mount
  useEffect(() => {
    const savedCity = localStorageService.get(STORAGE_KEYS.SELECTED_CITY)
    if (savedCity) {
      setSelectedCity(savedCity)
      fetchWeatherByCity(savedCity)
    } else {
      // Default to New York if no saved city
      setSelectedCity('New York')
      fetchWeatherByCity('New York')
    }
  }, [])

  const fetchWeatherByCity = async (city) => {
    if (!city) return

    setLoading(true)
    setError('')

    try {
      const data = await weatherService.getWeatherByCity(city)
      setWeather(data)
      // Save selected city to localStorage
      localStorageService.set(STORAGE_KEYS.SELECTED_CITY, city)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true)
    setError('')

    try {
      const data = await weatherService.getWeatherByCoords(lat, lon)
      setWeather(data)
      setSelectedCity(data.name)
      // Save the location city to localStorage
      localStorageService.set(STORAGE_KEYS.SELECTED_CITY, data.name)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const handleCityChange = (city) => {
    setSelectedCity(city)
    if (city) {
      fetchWeatherByCity(city)
    }
  }

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      return
    }

    setLoadingLocation(true)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        fetchWeatherByCoords(latitude, longitude)
        setLoadingLocation(false)
      },
      (error) => {
        let errorMessage = 'Unable to retrieve your location.'
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied by user.'
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.'
            break
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.'
            break
        }
        setError(errorMessage)
        setLoadingLocation(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    )
  }

  return (
    <div className="home-page">
      <div className="container">
        <header className="page-header">
          <h1>Weather Dashboard</h1>
          <p>Get current weather information for any city around the world</p>
        </header>

        <CitySelector
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
          onCurrentLocation={handleCurrentLocation}
          loadingLocation={loadingLocation}
        />

        <WeatherCard
          weather={weather}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default Home

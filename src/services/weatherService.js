const API_KEY = '4d8fb5b93d4af21d66a2948710284366'; // Free OpenWeatherMap API key for demo
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
  // Get weather by city name
  getWeatherByCity: async (city) => {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
  },

  // Get weather by coordinates
  getWeatherByCoords: async (lat, lon) => {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
  },

  // Get 5-day forecast
  getForecast: async (city) => {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Forecast data not found');
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch forecast data: ${error.message}`);
    }
  }
};

// Popular cities for dropdown
export const popularCities = [
  'New York',
  'London',
  'Tokyo',
  'Paris',
  'Sydney',
  'Mumbai',
  'Beijing',
  'Los Angeles',
  'Dubai',
  'Singapore',
  'Berlin',
  'Rome',
  'Madrid',
  'Cairo',
  'Bangkok'
];

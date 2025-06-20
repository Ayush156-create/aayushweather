# Weather App

A modern, responsive weather application built with React and Vite.

## Features

- 🌍 **Global Weather Data**: Get weather information for cities worldwide
- 📍 **Geolocation Support**: Automatically detect and use your current location
- 💾 **Local Storage**: Remembers your preferred cities and settings
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds

## Pages

- **Home**: Weather dashboard with city selection and current weather display
- **About**: Information about the app and its features
- **Contact**: Contact form for feedback and support

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Extract the project files
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Usage

1. **Select a City**: Use the dropdown menu to choose from popular cities worldwide
2. **Use Current Location**: Click the "Use My Location" button to get weather for your current position
3. **View Weather Details**: See temperature, humidity, wind speed, and more
4. **Navigate**: Use the navigation bar to explore other pages

## API

This app uses the OpenWeatherMap API to fetch weather data. The included API key is for demonstration purposes only.

## Technology Stack

- **React 18**: Modern React with Hooks
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **OpenWeatherMap API**: Weather data source
- **CSS3**: Modern styling with Flexbox and Grid
- **Local Storage**: Browser storage for user preferences

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a demo application. For production use, consider:

- Adding your own OpenWeatherMap API key
- Implementing proper error boundaries
- Adding unit and integration tests
- Setting up CI/CD pipeline
- Adding more weather features (forecasts, weather maps, etc.)

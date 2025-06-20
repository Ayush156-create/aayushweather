import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <header className="page-header">
          <h1>About WeatherApp</h1>
        </header>

        <div className="about-content">
          <section className="about-section">
            <h2>🌤️ Welcome to WeatherApp</h2>
            <p>
              WeatherApp is a modern, user-friendly weather application that provides 
              real-time weather information for cities around the world. Built with 
              React and powered by the OpenWeatherMap API, our app delivers accurate 
              and up-to-date weather data in a clean, intuitive interface.
            </p>
          </section>

          <section className="about-section">
            <h2>✨ Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3>Global Coverage</h3>
                <p>Get weather information for thousands of cities worldwide</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📍</div>
                <h3>Location Detection</h3>
                <p>Automatically detect and display weather for your current location</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💾</div>
                <h3>Smart Storage</h3>
                <p>Remember your preferred cities and settings locally</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Responsive Design</h3>
                <p>Works perfectly on desktop, tablet, and mobile devices</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>🛠️ Technology Stack</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <strong>Frontend:</strong> React 18 with Hooks
              </div>
              <div className="tech-item">
                <strong>Routing:</strong> React Router DOM
              </div>
              <div className="tech-item">
                <strong>Build Tool:</strong> Vite
              </div>
              <div className="tech-item">
                <strong>Weather API:</strong> OpenWeatherMap
              </div>
              <div className="tech-item">
                <strong>Styling:</strong> CSS3 with Flexbox & Grid
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>🎯 Our Mission</h2>
            <p>
              Our mission is to provide accurate, accessible weather information 
              through a simple and elegant interface. We believe that checking the 
              weather should be quick, easy, and pleasant - whether you're planning 
              your day or traveling to a new city.
            </p>
          </section>

          <section className="about-section">
            <h2>🔒 Privacy & Data</h2>
            <p>
              We respect your privacy. Weather preferences are stored locally on 
              your device and are never transmitted to our servers. Location data 
              is only used when you explicitly request it and is processed securely 
              through the browser's geolocation API.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About

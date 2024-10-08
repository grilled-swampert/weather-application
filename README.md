# Weather App
A modern, responsive weather application built with React and enhanced with GSAP animations.

## Table of Contents

- [Features](#features)
- [UI](#UI)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Folder Structure](#folder-structure)

## Features
- Real-time weather data from OpenWeatherMap API
- Search for weather by city name
- Display of temperature, weather condition, wind speed, and humidity
- Responsive design for mobile and desktop

## UI
![Screenshot 2024-10-01 103030](https://github.com/user-attachments/assets/13ddd081-f9c3-4f2c-b5aa-66ab3ee6939b)


## Technologies Used

- React.js
- GSAP 
- OpenWeatherMap API
- CSS3

![Background (2)](https://github.com/user-attachments/assets/25e9cd20-cd1d-4122-8ba7-045eac7ced00)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/grilled-swampert/weather-application
   ```

2. Navigate to the project directory:
   ```
   cd weather-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## Usage

1. Enter a city name in the search bar.
2. Press Enter or click the search icon.
3. View the current weather conditions for the specified location.

## API Key

This project uses the OpenWeatherMap API. You'll need to sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api) and add it to your `.env` file as described in the installation steps.

## Folder Structure

```
weather-app/
  ├── public/
  ├── src/
  │   ├── assets/
  │   │   └── images/
  │   ├── components/
  │   │   └── WeatherApp.js
  │   │   └── WeatherApp.css
  │   ├── App.js
  │   └── index.js
  ├── .env
  ├── .gitignore
  ├── package.json
  └── README.md
```



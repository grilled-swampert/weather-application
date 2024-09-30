import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";
import loadingGif from "../assets/images/loading.gif"; // Add a loading GIF

import "./WeatherApp.css";
import { useState } from "react";

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Switzerland");
  const [inputLocation, setInputLocation] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const apiKey = "ce56e0dbff6d15597d2c643c965e76e3";

  const search = async () => {
    if (!inputLocation) {
      setError("Please enter a location.");
      return;
    }

    try {
      setLoading(true); // Start loading
      setError(""); // Reset error before making a new request
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=${apiKey}&units=metric`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Location not found. Please try again.");
      }

      const weatherData = await res.json();
      setData(weatherData);
      setLocation(weatherData.name);
      setInputLocation(""); // Clear input after search
    } catch (err) {
      setError(err.message); // Set error message if request fails
    } finally {
      setLoading(false); // Stop loading after fetching data
    }
  };

  const getWeatherImage = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return sunny;
      case "Clouds":
        return cloudy;
      case "Rain":
        return rainy;
      case "Snow":
        return snowy;
      default:
        return sunny;
    }
  };

  const getBackgroundClass = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return "sunny-bg";
      case "Clouds":
        return "cloudy-bg";
      case "Rain":
        return "rainy-bg";
      case "Snow":
        return "snowy-bg";
      default:
        return "sunny-bg";
    }
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={`container ${data.weather ? getBackgroundClass(data.weather[0].main) : ""}`}>
      <div className="weather-app">
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">{location}</div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Location"
              value={inputLocation}
              onChange={(e) => setInputLocation(e.target.value)}
              disabled={loading} // Disable input when loading
            />
            <i
              className={`fa-solid fa-magnifying-glass ${loading ? "disabled" : ""}`}
              onClick={!loading ? search : null} // Disable click when loading
            ></i>
          </div>
        </div>

        {loading ? (
          <div className="loading">
            <img src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          <>
            {error && <div className="error-message">{error}</div>} {/* Display error message if any */}
            <div className="date">{currentDate}</div>

            <div className="weather">
              <img src={data.weather ? getWeatherImage(data.weather[0].main) : snowy} alt="Weather Icon" />
              <div className="weather-type">{data.weather ? data.weather[0].main : "Snowy"}</div>
              <div className="temp">{data.main ? `${Math.round(data.main.temp)}°C` : "-2°C"}</div>
            </div>

            <div className="weather-data">
              <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">{data.wind ? `${data.wind.speed} km/h` : "5 km/h"}</div>
              </div>
              <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-water"></i>
                <div className="data">{data.main ? `${data.main.humidity}%` : "85%"}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;

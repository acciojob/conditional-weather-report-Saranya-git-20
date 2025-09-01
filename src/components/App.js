
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  // Use plain object for hardcoded weather
  const weather = {
    temperature: 25,
    conditions: "Sunny"
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Weather App</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;

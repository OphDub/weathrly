import React from 'react';
import Card from './Card.js';
import CurrentWeather from './CurrentWeather.js';
import TenDayForecast from './10DayForecast.js';
import SevenDayForecast from './7DayForecast.js';
import Search from './Search.js';
import Welcome from './Welcome.js';

const App = () => {
  return (
    <div>
      <Welcome />
      <Search />
      <CurrentWeather />
      <SevenDayForecast />
      <TenDayForecast />
    </div>
  )
}

export default App;
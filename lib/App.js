import React from 'react';
import Card from './Card.js';
import CurrentWeather from './CurrentWeather.js';
import TenDayForecast from './10DayForecast.js';
import SevenDayForecast from './7DayForecast.js';
import Search from './Search.js';
import Welcome from './Welcome.js';
import { data } from './data.js';

const App = () => {
  return (
    <div>
      <Welcome />
      <Search />
      <CurrentWeather weather={data} />
      <SevenDayForecast forecast={data.hourly_forecast}/>
      <TenDayForecast />
    </div>
  )
}

export default App;
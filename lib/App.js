import React from 'react';
import Card from './Card.js';
import CurrentWeather from './CurrentWeather.js';
import TenDayForecast from './10DayForecast.js';
import SevenHourForecast from './7HourForecast.js';
import Search from './Search.js';
import Welcome from './Welcome.js';
import { data } from './data.js';

export default class App extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <Welcome />
        <Search />
        <CurrentWeather weather={data} />
        <SevenHourForecast forecast={data.hourly_forecast}/>
        <TenDayForecast forecast={data.forecast}/>
      </div>
    )
  }
}


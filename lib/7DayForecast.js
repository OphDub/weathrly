import React from 'react';
import Card from './Card.js';

const SevenDayForecast = (props) => {
  return (
    <div>
      This is a 7 Day Forecast Component
      <Card time={props.forecast[0]}/>
    </div>
  )
}

export default SevenDayForecast;
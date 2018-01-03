import React from 'react';
import Card from './Card.js';

const SevenDayForecast = (props) => {
  return (
    <div>
      This is a 7 Day Forecast Component
      {
        props.forecast.slice(0,8).forEach( hour => {
          return(
            <Card time={hour.FCTTIME.hour}
                  icon={hour.icon_url}
                  temp={hour.temp.english} />
          )
        })
      }
    </div>
  )
}

export default SevenDayForecast;
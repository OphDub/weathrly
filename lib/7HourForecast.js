import React from 'react';
import Card from './Card.js';
import '../styles/7Hour.scss';

const SevenHourForecast = (props) => {
  return (
    <div className='seven-hour'>
      <p>7 Hour Forecast:</p>
      {
        props.forecast.slice(0,8).map( hour => {
          // console.log(hour)
          return(
            <Card time={hour.FCTTIME.civil}
                  icon={hour.icon_url}
                  temp={hour.temp.english + ' F'} />
          )
        })
      }
    </div>
  )
}

export default SevenHourForecast;
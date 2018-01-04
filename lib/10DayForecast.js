import React from 'react';
import Card from './Card.js';
import '../styles/10Day.scss';

const TenDayForecast = (props) => {
  return (

    <div className='ten-day'>
      <p>10 Day Forecast:</p>
      {
        props.forecast.simpleforecast.forecastday.map( day => {
          // console.log(day)
          return(
            <Card time={day.date.weekday_short + ' ' + day.date.month + '/' + day.date.day}
                  icon={day.icon_url}
                  temp={'High: ' + day.high.fahrenheit + ' F' + ' | ' + 'Low: ' + day.low.fahrenheit + ' F'}/>
          )
        })
      }
    </div>
  )
}

export default TenDayForecast;
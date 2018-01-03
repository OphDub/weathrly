import React from 'react';

const CurrentWeather = (props) => {
  return (
    <div className='currentWeather'>
      <h1>Current City: {props.weather.current_observation.display_location.full}</h1>
      <p>Current Condition: {props.weather.current_observation.weather}</p>
      <p>Current Day: {props.weather.current_observation.local_time_rfc822}</p>
      <p>Current Temp: {props.weather.current_observation.temperature_string}</p>
      <p>Expected High: {props.weather.forecast.simpleforecast.forecastday[1].high.fahrenheit}</p>
      <p>Expected Low: {props.weather.forecast.simpleforecast.forecastday[1].low.fahrenheit}</p>
      <p>Summary of Day: {props.weather.forecast.txt_forecast.forecastday[1].fcttext}</p>
    </div>
  )
}

export default CurrentWeather;
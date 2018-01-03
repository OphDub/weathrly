import React from 'react';

const CurrentWeather = (props) => {
  return (
    <div className='currentWeather'>
      <h1>Current City: {props.weather.current_observation.display_location.full}</h1>
      <p>Current Condition: {}</p>
      <p>Current Day: {props.weather.current_observation.local_time_rfc822}</p>
      <p>Current Temp: {}</p>
      <p>Expected High: {}</p>
      <p>Expected Low: {}</p>
      <p>Summary of Day: {}</p>
    </div>
  )
}

export default CurrentWeather;
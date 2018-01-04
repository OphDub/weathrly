import React from 'react';
import '../styles/CurrentWeather.scss'

const CurrentWeather = (props) => {
  return (
    <div className="current-weather">
      <div className="left">
        <h3 className="location">{props.weather.current_observation.display_location.full}</h3>
        <p className="date">{props.weather.current_observation.local_time_rfc822}</p>
        <p className="temp">{props.weather.current_observation.temp_f}</p>
        <p className="high">High: {props.weather.forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
        <p className="low">Low: {props.weather.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
        <p className="summary">{props.weather.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </div>
      <div className="right">
        <img className="icon" src={props.weather.current_observation.icon_url} />
        <p className="condition">{props.weather.current_observation.weather}</p>
      </div>
    </div>
  )
}

export default CurrentWeather;
import React from 'react';

export default class CurrentWeather extends React.Component {
  render () {
    return (
      <div className='currentWeather'>

        <h1>Current City: {this.props.weather.current_observation.display_location.full}</h1>
        <p>Current Condition: {this.props.weather.current_observation.weather}</p>
        <p>Current Day: {this.props.weather.current_observation.local_time_rfc822}</p>
        <p>Current Temp: {this.props.weather.current_observation.temperature_string}</p>
        <p>Expected High: {this.props.weather.forecast.simpleforecast.forecastday[1].high.fahrenheit}</p>
        <p>Expected Low: {this.props.weather.forecast.simpleforecast.forecastday[1].low.fahrenheit}</p>
        <p>Summary of Day: {this.props.weather.forecast.txt_forecast.forecastday[1].fcttext}</p>
      </div>
    )
  }
}


import React from 'react';
import '../styles/CurrentWeather.scss';

export default class CurrentWeather extends React.Component {
  render () {
    return (
      <div className="current-weather">
        {
          this.props.weather.current_observation &&
          <div className="right">
            <h3 className="location">{this.props.weather.current_observation.display_location.full}</h3>
            <p className="date">{this.props.weather.current_observation.local_time_rfc822}</p>
            <p className="temp">{this.props.weather.current_observation.temp_f}</p>
            <img className="icon" src={this.props.weather.current_observation.icon_url} />
            <p className="condition">{this.props.weather.current_observation.weather}</p>
          </div>
        }

        {
          this.props.weather.forecast &&
          <div className="left">
            <p className="high">High: {this.props.weather.forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
            <p className="low">Low: {this.props.weather.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
            <p className="summary">{this.props.weather.forecast.txt_forecast.forecastday[0].fcttext}</p>
          </div>
        }
      </div>
    )
  }
}


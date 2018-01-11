import React from 'react';
import '../styles/CurrentWeather.scss';

export default class CurrentWeather extends React.Component {
  render () {
    let currWeather = this.props.weather.current_observation;
    let simpleFC = this.props.weather.forecast.simpleforecast.forecastday[0];
    let textForecast = this.props.weather.forecast.txt_forecast.forecastday[0];

    return (
      <section className="current-weather">
        {
          this.props.weather.current_observation &&
          this.props.weather.forecast &&

          <div className="curr-info">
            <article className="left">
              <h3 className="location">{currWeather.display_location.full}</h3>
              <p className="date">{currWeather.local_time_rfc822}</p>
              <p className="temp">{currWeather.temp_f} °F</p>
              <p className="high">High: {simpleFC.high.fahrenheit} °F</p>
              <p className="low">Low: {simpleFC.low.fahrenheit} °F</p>
              <p className="summary">{textForecast.fcttext}</p>
            </article>

            <article className="right">
              <img className="icon" src={currWeather.icon_url} />
              <p className="condition">{currWeather.weather}</p>
            </article>
          </div>
        }
      </section>
    );
  }
}

CurrentWeather.propTypes = {
  weather: React.PropTypes.object
};

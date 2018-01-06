import React from 'react';
import Card from './Card.js';
import CurrentWeather from './CurrentWeather.js';
import TenDayForecast from './10DayForecast.js';
import SevenHourForecast from './7HourForecast.js';
import Search from './Search.js';
import Welcome from './Welcome.js';
import { data } from './data.js';
import '../styles/App.scss';
import Api from './Api.js';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      showCurrentWeather: true,
      showSevenHour: false,
      showTenDay: false,
      weatherData: {},
    }

    this.getWeather = this.getWeather.bind(this);
    this.toggleSevenHour = this.toggleSevenHour.bind(this);
    this.toggleTenDay = this.toggleTenDay.bind(this);
  }

  toggleSevenHour () {
    this.setState({
      showSevenHour: !this.state.showSevenHour,
    })
  }

  toggleTenDay () {
    this.setState({
      showTenDay: !this.state.showTenDay,
    })
  }

  componentDidMount() {
    this.getWeather(this.state.location);
  }

  getWeather (location) {
    Api.getWeather(location)
    .then(json => this.setState ({ weatherData: json }))
  }

  render () {
    return (
      <div>
        <h1 className="title">Weathrly</h1>
        <Welcome />
        <Search getWeather={this.getWeather}/>
        {
          this.state.weatherData &&
          <CurrentWeather weather={this.state.weatherData} />
        }

        {
          console.log(this.state.weatherData)
        }

        <div className="forecastButtons">
          <button className="sevenHourForecast" onClick={this.toggleSevenHour}>7 Hour</button>
          <button className="tenDayForecast" onClick={this.toggleTenDay}>10 Hour</button>
        </div>
        {
          this.state.showSevenHour &&
          <SevenHourForecast forecast={this.state.weatherData.hourly_forecast}/>
        }

        {
          this.state.showTenDay &&
          <TenDayForecast forecast={this.state.weatherData.forecast}/>
        }
      </div>
    )
  }
}


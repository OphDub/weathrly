import React from 'react';
import Card from './Card.js';
import CurrentWeather from './CurrentWeather.js';
import TenDayForecast from './10DayForecast.js';
import SevenHourForecast from './7HourForecast.js';
import Search from './Search.js';
import Welcome from './Welcome.js';
import { data } from './data.js';
import LocalStorageMock from './mockLocalStorage.js'
import '../styles/App.scss';
import '../styles/Search.scss';
import Api from './api.js';
import Error from './Error.js';

export default class App extends React.Component {
  constructor () {
    super();
    this.hasLocation = {
      'flex-direction': 'row',
      'justify-content' : 'space-between'
    }

    this.state = {
      showCurrentWeather: true,
      showSevenHour: false,
      showTenDay: false,
      weatherData: false,
      location: null,
      showError: false
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

  getCity() {
    let retrievedObj = localStorage.getItem('city');
    let parsedObj = JSON.parse(retrievedObj);

    // LOCALSTORAGE MOCK
    // let mockLS = new LocalStorageMock();
    // mockLS.setItem(this.state.location);
    // let parsedObj = mockLS.getItem('city');

    this.setState({ location: parsedObj });
  }

  setLocation(place) {
    this.setState({
      location: place
    })
  }

  componentWillMount() {
    this.getCity();
  }

  componentDidMount() {
    this.getWeather(this.state.location);
  }

  toggleError() {
    (this.state.weatherData.response.error) &&
    this.setState({ showError: true });

    (!this.state.weatherData.response.error) &&
    this.setState({ showError: false });
  }

  getWeather (location) {
    Api.getWeather(location)
    .then(json => {
      this.setState ({ weatherData: json });
      this.toggleError();
      }
    )

    this.setLocation(location);
  }

  hasWeather () {
    this.setState({
      'flex-direction': row,
      'justify-content': 'space-between',
    })
  }

  render () {
    return (
      <div>
        <header style={this.state.location && this.hasLocation}>
          {
            this.state.location &&
            <h1 className="title">Weathrly</h1>
          }

          {
            !this.state.location &&
            <Welcome />
          }

          <Search className="search" getWeather={this.getWeather}/>
        </header>


        {
          this.state.weatherData &&
          <CurrentWeather weather={this.state.weatherData} />
        }

        {
          this.state.showError &&
          <Error />
        }

        {
          this.state.location &&

          <div className="forecast-buttons">
            <button className="seven-hr-forecast" onClick={this.toggleSevenHour}>7 Hour</button>
            <button className="ten-day-forecast" onClick={this.toggleTenDay}>10 Day</button>
          </div>
        }

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


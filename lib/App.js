import React from 'react';
import CurrentWeather from './CurrentWeather.js';
import TenDayForecast from './10DayForecast.js';
import SevenHourForecast from './7HourForecast.js';
import Search from './Search.js';
import Welcome from './Welcome.js';
import '../styles/App.scss';
import '../styles/Search.scss';
import Api from './api.js';
import Error from './Error.js';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      showCurrentWeather: true,
      showSevenHour: false,
      showTenDay: false,
      weatherData: false,
      location: null,
      showError: false,
      hasLocation: false,
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

    this.setState({ location: parsedObj });
  }

  setLocation(place) {
    this.setState({ location: place })

    let stringifiedObj = JSON.stringify(place);
    localStorage.setItem('city', stringifiedObj);
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

    !this.state.showError &&
    this.setLocation(location);
  }

  render () {
    return (
      <div>
        <header className={localStorage.city ? 'has-weather': 'no-weather'}>
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
          this.state.location && !this.state.weatherData.error &&

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


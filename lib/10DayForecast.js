import React from 'react';
import Card from './Card.js';
import '../styles/10Day.scss';

export default class TenDayForecast extends React.Component {
  constructor () {
    super();

    this.state = {
      showForecast: true
    };

    this.toggleForecast = this.toggleForecast.bind(this);
  }

  toggleForecast () {
    this.setState({
      showForecast: !this.state.showForecast
    });
  }

  render () {
    let forecastInfo = this.props.forecast.simpleforecast;
    return (
      <div onClick={this.toggleForecast}>
        {
          this.state.showForecast &&
          <div className="ten-day-container">
            <h3>10-day Forecast</h3>
            <div className='ten-day'>
            {
              forecastInfo.forecastday.map( (day, index) => {
                let forecastDate = day.date.weekday_short + ' ' + day.date.month + '/' + day.date.day
                let forecastTemps = day.high.fahrenheit + ' F' + '   |   ' + day.low.fahrenheit + ' F'

                return (
                  <Card key={index}
                        time={forecastDate}
                        icon={day.icon_url}
                        temp={forecastTemps}/>
                );
              })
            }
            </div>
          </div>
        }
      </div>
    )
  }
}

TenDayForecast.propTypes = {
  forecast: React.PropTypes.object,
}


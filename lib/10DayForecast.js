import React from 'react';
import Card from './Card.js';
import '../styles/10Day.scss';

export default class TenDayForecast extends React.Component {
  constructor () {
    super();

    this.state = {
      showForecast: true,
    }

    this.toggleForecast = this.toggleForecast.bind(this);
  }

  toggleForecast () {
    this.setState({
      showForecast: !this.state.showForecast
    })
  }

  render () {
    return (
      <div onClick={this.toggleForecast}>
        {
          this.state.showForecast &&
          <div className="ten-day-container">
            <h3>10-day Forecast</h3>
            <div className='ten-day'>
            {
              this.props.forecast.simpleforecast.forecastday.map( (day, index) => {
                return(
                  <Card key={index}
                        time={day.date.weekday_short + ' ' + day.date.month + '/' + day.date.day}
                        icon={day.icon_url}
                        temp={day.high.fahrenheit + ' F' + '   |   ' + day.low.fahrenheit + ' F'}/>
                )
              })
            }
            </div>
          </div>
        }
      </div>
    )
  }
}


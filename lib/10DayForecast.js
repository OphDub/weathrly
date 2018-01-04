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
    console.log('toggle 10 day')
    this.setState({
      showForecast: !this.state.showForecast
    })
  }

  render () {
    return (
      <div onClick={this.toggleForecast}>
        {
          this.state.showForecast &&
          <div className='ten-day'> 10 Day Forecast:
          {
            this.props.forecast.simpleforecast.forecastday.map( day => {
              // console.log(day)
              return(
                <Card time={day.date.weekday_short + ' ' + day.date.month + '/' + day.date.day}
                      icon={day.icon_url}
                      temp={'High: ' + day.high.fahrenheit + ' F' + ' | ' + 'Low: ' + day.low.fahrenheit + ' F'}/>
              )
            })
          }
          </div>
        }
      </div>
    )
  }
}


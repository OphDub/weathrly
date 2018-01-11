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
                let fcWeekday = day.date.weekday_short;
                let fcMonth = day.date.month;
                let fcDay = day.date.day;
                let forecastHigh = day.high.fahrenheit + ' F';
                let forecastLow = day.low.fahrenheit + ' F';

                return (
                  <Card key={index}
                        time={fcWeekday + ' ' + fcMonth + '/' + fcDay }
                        icon={day.icon_url}
                        temp={forecastHigh + ' | ' + forecastLow}/>
                );
              })
            }
            </div>
          </div>
        }
      </div>
    );
  }
}

TenDayForecast.propTypes = {
  forecast: React.PropTypes.object
};


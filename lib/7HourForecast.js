import React from 'react';
import Card from './Card.js';
import '../styles/7Hour.scss';

export default class SevenHourForecast extends React.Component {
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
    return (
      <div onClick={this.toggleForecast}>
        {
          this.state.showForecast &&
          <div className="seven-hr-container">
            <h3>7-hour Forecast</h3>
            <div className="seven-hour">
              {
                this.props.forecast.slice(0, 7).map( (hour, index) => {
                  return(
                    <Card key={index}
                          time={hour.FCTTIME.civil}
                          icon={hour.icon_url}
                          temp={hour.temp.english + ' F'} />
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


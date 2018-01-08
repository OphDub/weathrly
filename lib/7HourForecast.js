import React from 'react';
import Card from './Card.js';
import '../styles/7Hour.scss';

export default class SevenHourForecast extends React.Component {
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
          <div className="seven-hour"> 7 Hour Forecast:
            {
              this.props.forecast.slice(0,7).map( hour => {
                return(
                  <Card time={hour.FCTTIME.civil}
                        icon={hour.icon_url}
                        temp={hour.temp.english + ' F'} />
                )
              })
            }
          </div>
        }
      </div>
    )
  }
}


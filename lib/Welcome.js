import React from 'react';
import '../styles/Welcome.scss'
import Search from './Search.js';

export default class Welcome extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="welcome">Welcome to Weathrly!</h1>
        <div className="welcome-search">
          <Search getWeather={this.props.getWeather}/>

          {console.log(this.props.getWeather)}
        </div>
      </div>
    )
  }
}

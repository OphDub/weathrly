import React from 'react';
import '../styles/Search.scss';
import cityData from './Cities.js';

export default class Search extends React.Component {
  constructor () {
    super();

    this.state = {
      searchLocation: ''
    }

    this.acceptInput = this.acceptInput.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  acceptInput (e) {
    this.setState({
      searchLocation: e.target.value
    })
  }

  getWeather () {
    this.props.getWeather(this.state.searchLocation)
  }

  render () {
    return (
      <div>
        <input  type="text"
                className="search-bar"
                placeholder="Search cities"
                value={this.state.searchLocation}
                onChange={this.acceptInput}/>
        <button className="search-btn" onClick={this.getWeather}>Search</button>
      </div>
    )
  }
}
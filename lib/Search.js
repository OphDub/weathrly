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
    this.compareCity = this.compareCity.bind(this);
  }

  compareCity () {
    let searchedCity = cityData.data.find( city => city.includes(this.state.searchLocation))
    let splitCity = searchedCity.split(', ')
    let apiCity = splitCity[1] + "/" + splitCity[0]

    this.getWeather(apiCity)
  }

  acceptInput (e) {
    this.setState({
      searchLocation: e.target.value
    })
  }

  getWeather (city) {
    this.props.getWeather(city)
  }

  render () {
    return (
      <div>
        <input  type="text"
                className="search-bar"
                placeholder="Search cities"
                value={this.state.searchLocation}
                onChange={this.acceptInput}/>
        <button className="search-btn" onClick={this.compareCity}>Search</button>
      </div>
    )
  }
}
import React from 'react';
import '../styles/Search.scss';
import cities from './Cities.js';
import { Trie } from '@ophdub/complete-me';
const newTrie = new Trie
export default class Search extends React.Component {
  constructor () {
    super();

    this.state = {
      searchLocation: '',
      suggestedCities: []
    }

    this.acceptInput = this.acceptInput.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.compareCity = this.compareCity.bind(this);
    this.suggestCity = this.suggestCity.bind(this);
  }

  componentDidMount() {
    this.importCitySuggestions()
  }

  importCitySuggestions () {
    newTrie.populate(cities.data)
  }

  suggestCity (word) {
    let complete;
    let state = word.split(', ')
    console.log(state)
    let city = state.shift().split(' ')

    let updatedState = state[0].toUpperCase()
    var updatedCity = city.map( word => word.charAt(0).toUpperCase() + word.slice(1))

    if (updatedCity.length > 1) {
      complete = updatedCity[0] + " " + updatedCity[1] + ", " + updatedState;
    } else {
      complete = updatedCity + ', ' + updatedState;
    }

    console.log(complete)

    let suggestions = newTrie.suggest(word)

    this.setState({
      suggestedCities: suggestions
    })
  }

  compareCity () {
    let splitCity = this.state.searchLocation.split(', ')
    let apiCity = splitCity[1] + "/" + splitCity[0]

    this.getWeather(apiCity)
  }

  acceptInput (e) {
    this.setState({
      searchLocation: e.target.value
    })

    this.suggestCity(e.target.value);
  }

  getWeather (city) {
    let stringifiedObj = JSON.stringify(city);
    localStorage.setItem('city', stringifiedObj);
    this.props.getWeather(city)
  }

  render () {
    return (
      <div>
        <input  type="text"
                className="search-bar"
                placeholder="Search cities"
                value={this.state.searchLocation}
                onChange={ (e)=> {
                  this.acceptInput(e);
                  this.suggestCity(e);
                  }}/>

        {
          this.state.suggestedCities &&

          this.state.suggestedCities.map((city) => {
            return (
              <div>
                <p> { city } </p>
              </div>
            )
          })
        }

        <button className="search-btn" onClick={this.compareCity}>Search</button>
      </div>
    )
  }
}
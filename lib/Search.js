import React from 'react';
import '../styles/Search.scss';
import cities from './Cities.js';
import { Trie } from '@ophdub/complete-me';

export default class Search extends React.Component {
  constructor () {
    super();
    this.trie = new Trie

    this.state = {
      searchLocation: '',
      suggestedCities: [],
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
    this.trie.populate(cities.data)
  }

  suggestCity (word) {
    if (!parseInt(word)) {
      this.setState({
        suggestedCities: this.trie.suggest(word)
      })
    }
  }

  compareCity () {
    let splitCity = this.state.searchLocation.split(', ')
    let apiCity = splitCity[1] + "/" + splitCity[0]

    this.getWeather(apiCity)
  }

  acceptInput (input) {
    this.setState({
      searchLocation: input.target.value,
    })

    this.suggestCity(input.target.value)
  }

  getWeather (city) {
    let stringifiedObj = JSON.stringify(city);
    localStorage.setItem('city', stringifiedObj);
    this.props.getWeather(city);
  }

  render () {
    return (
      <form>
        <input  type="text"
                className="search-bar"
                list="suggest"
                placeholder="Search by city or zip code"
                onChange={ (e)=> {
                  this.acceptInput(e)
                }}/>

        {
          this.state.suggestedCities &&

          <datalist id="suggest">
            { this.state.suggestedCities.map((city, index) => <option value={city} key={index}/>) }
          </datalist>
        }

        <button className="search-btn" onClick={this.compareCity}>Search</button>
      </form>
    )
  }
}

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
    let suggestions = newTrie.suggest(word);

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
    this.props.getWeather(city);
  }

  render () {
    return (
      <div className="search">
        <input  type="text"
                className="search-bar"
                list="suggest"
                placeholder="Search cities"
                value={this.state.searchLocation}
                onChange={ (e)=> {
                  this.acceptInput(e);
                  this.suggestCity(e);
                  }}/>

        {
          this.state.suggestedCities &&

            <datalist id="suggest">
              {this.state.suggestedCities.map(city => <option value={city} />)}
            </datalist>
        }

        <button className="search-btn" onClick={this.compareCity}>Search</button>
      </div>
    )
  }
}
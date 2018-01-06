import React from 'react';
import '../styles/Search.scss';
import cityData from './Cities.js';

const Search = () => {
  return (
    <input type="text" className="search-bar" placeholder="Search cities" onChange={}/>
    <button className="search-btn">Search</button>
  )
}

export default Search;
import React from 'react';
import '../styles/Search.scss'

const Search = () => {
  return (
    <div>
      <input type="text" className="search-bar" placeholder="Search cities" />
      <button className="submit-btn">Submit</button>
    </div>
  )
}

export default Search;
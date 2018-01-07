import React from 'react';
import '../styles/Welcome.scss'
import Search from './Search.js';
import cities from './Cities.js';

export default class Welcome extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="welcome">Welcome to Weathrly!</h1>
        <form className="welcome-search">
          <Search />
        </form>
      </div>
    )
  }
}

import React from 'react';
import '../styles/Welcome.scss';

export default class Welcome extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="welcome">Welcome to Weathrly!</h1>
      </div>
    );
  }
}

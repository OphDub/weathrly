import React from 'react';

export default class LocalStorageMock extends React.Component {
  constructor() {
    super();

    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

};
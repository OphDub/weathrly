import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import { data } from '../lib/data.js';
import '../styles/App.scss';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it.skip('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it.skip('should have a have showCurrentWeather state of true by default', () => {
    expect(wrapper.state().showCurrentWeather).toEqual(true);
  })

  it.skip('should have a have showSevenHour state of false by default', () => {
    expect(wrapper.state().showSevenHour).toEqual(false);
  })

  it.skip('should have a have showTenDay state of false by default', () => {
    expect(wrapper.state().showTenDay).toEqual(false);
  })

  it.skip('should render h1, Welcome, Search, CurrentWeather, and button components by default', () => {
    expect(wrapper.find('h1').length).toEqual(1)
    expect(wrapper.find('Welcome').length).toEqual(1)
    expect(wrapper.find('Search').length).toEqual(1)
    expect(wrapper.find('CurrentWeather').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(2)
  })
})
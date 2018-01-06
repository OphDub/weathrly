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

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it('should have a have showCurrentWeather state of true by default', () => {
    expect(wrapper.state().showCurrentWeather).toEqual(true);
  })

  it('should have a have showSevenHour state of false by default', () => {
    expect(wrapper.state().showSevenHour).toEqual(false);
  })

  it('should have a have showTenDay state of false by default', () => {
    expect(wrapper.state().showTenDay).toEqual(false);
  })

  it('should render h1, Welcome, Search, CurrentWeather, and button components by default', () => {
    expect(wrapper.find('h1').length).toEqual(1)
    expect(wrapper.find('Welcome').length).toEqual(1)
    expect(wrapper.find('Search').length).toEqual(1)
    expect(wrapper.find('CurrentWeather').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(2)
  })

  it('should update state and show SevenHour and TenDay forecast components when a button is clicked on', () => {
    // expect(wrapper.find('SevenHourForecast').length).toEqual(0)
    // expect(wrapper.find('TenDayForecast').length).toEqual(0)
    expect(wrapper.state()).toEqual({ showCurrentWeather: true, showSevenHour: false, showTenDay: false, weatherData: {} })

    wrapper.find('toggleSevenHourBtn').simulate('click')

    expect(wrapper.state()).toEqual({ showCurrentWeather: true, showSevenHour: true, showTenDay: true, weatherData: {} })
    // expect(wrapper.find('SevenHourForecast').length).toEqual(1)
    // expect(wrapper.find('TenDayForecast').length).toEqual(1)
  })

})
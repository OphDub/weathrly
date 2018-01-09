import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import { data } from '../lib/data.js';
import '../styles/App.scss';
import LocalStorageMock from '../lib/mockLocalStorage.js'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)

    // let mockLS = new LocalStorageMock();
    // mockLS.setItem(this.state.location);
    // let parsedObj = mockLS.getItem('city');
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a showCurrentWeather state of true by default', () => {
    expect(wrapper.state().showCurrentWeather).toEqual(true);
  });

  it('should have a showSevenHour state of false by default', () => {
    expect(wrapper.state().showSevenHour).toEqual(false);
  });

  it('should have a showTenDay state of false by default', () => {
    expect(wrapper.state().showTenDay).toEqual(false);
  });

  it('should have a weatherData state of empty Object by default', () => {
    expect(wrapper.state().weatherData).toEqual(false);
  });

  it('should have a location state of null by default', () => {
    expect(wrapper.state().location).toEqual(null);
  });

  it('should have a showError state of false by default', () => {
    expect(wrapper.state().showError).toEqual(false);
  })

  it('should render div, h1, Welcome, and Search components by default', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should not render Welcome component when state is changed', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);

    wrapper.setState({ location: true });

    expect(wrapper.find('Welcome').length).toEqual(0);
  });

  it('should render Current Weather component when state is changed', () => {
    expect(wrapper.find('CurrentWeather').length).toEqual(0);

    wrapper.setState({ weatherData: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
  });

  it('should render or hide Seven Hour component when button is clicked', () => {
    expect(wrapper.find('SevenHourForecast').length).toEqual(0);

    wrapper.setState({ location: true });
    wrapper.find('.seven-hr-forecast').simulate('click');

    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);

    wrapper.find('.seven-hr-forecast').simulate('click');

    expect(wrapper.find('SevenHourForecast').length).toEqual(0);
  });

  it('should render or hide Ten Day Forecast component when state is changed', () => {
    expect(wrapper.find('TenDayForecast').length).toEqual(0);

    wrapper.setState({ location: true });
    wrapper.find('.ten-day-forecast').simulate('click');

    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);

    wrapper.find('.ten-day-forecast').simulate('click');

    expect(wrapper.find('TenDayForecast').length).toEqual(0);
  });

  it('should render Error component when an invalid city/state is submitted', () => {
    expect(wrapper.find('Error').length).toEqual(0);

    wrapper.setState({ showError: true })

    expect(wrapper.find('Error').length).toEqual(1);
  });

  it('should toggle the state showSevenHour', () => {
    expect(wrapper.state().showSevenHour).toEqual(false);

    wrapper.instance().toggleSevenHour();

    expect(wrapper.state().showSevenHour).toEqual(true);
  });

  it('should toggle the state showTenDay', () => {
    expect(wrapper.state().showTenDay).toEqual(false);

    wrapper.instance().toggleTenDay();

    expect(wrapper.state().showTenDay).toEqual(true);
  });

  it('should set the location passed in to the state location', () => {
    expect(wrapper.state().location).toEqual(null);

    wrapper.instance().setLocation('Denver, CO');

    expect(wrapper.state().location).toEqual('Denver, CO');
  });

})
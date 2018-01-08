import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHourForecast from '../lib/7HourForecast.js';
import { data } from '../lib/data.js';

describe('SevenHourForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHourForecast forecast={data.hourly_forecast} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start with props', () => {
    expect(wrapper.instance().props.forecast).toEqual(data.hourly_forecast);
  });

  it('should have a default state where showForecast is true', () => {
    expect(wrapper.state().showForecast).toEqual(true);
  });

  it('should update state and hide forecast when div is clicked', () => {
    wrapper.first('div').simulate('click');

    expect(wrapper.state().showForecast).toEqual(false);

    wrapper.first('div').simulate('click');

    expect(wrapper.state().showForecast).toEqual(true);
  });  

  it('should render a 7 Card components', () => {
    expect(wrapper.find('Card').length).toEqual(7);
  })

})
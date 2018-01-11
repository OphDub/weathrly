import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDayForecast from '../lib/10DayForecast.js';
import { data } from '../test/data.js';

describe('TenDayForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDayForecast forecast={data.forecast} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start with props', () => {
    expect(wrapper.instance().props.forecast).toEqual(data.forecast);
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

  it('should render 10 Card components', () => {
    expect(wrapper.find('Card').length).toEqual(10);
  });

})
import React from 'react';
import { mount, shallow } from 'enzyme';
import Welcome from '../lib/Welcome.js';
import { data } from '../test/data.js';

describe('TenDayForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render div and h1 components', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should display the text we expect', () => {
    expect(wrapper.find('h1').text()).toEqual('Welcome to Weathrly!');
  });

})
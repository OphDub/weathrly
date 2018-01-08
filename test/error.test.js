import React from 'react';
import { mount, shallow } from 'enzyme';
import Error from '../lib/Error.js';
import { data } from '../lib/data.js';

describe('TenDayForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Error />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h1 element', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

})
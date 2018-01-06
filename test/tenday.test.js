import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDayForecast from '../lib/10DayForecast.js';
import { data } from '../lib/data.js';

describe('TenDayForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDayForecast />)
  })

  it.skip('should exist', () => {

    expect(wrapper).toBeDefined()
  })

})
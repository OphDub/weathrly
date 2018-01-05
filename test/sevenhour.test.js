import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHourForecast from '../lib/7HourForecast.js';
import { data } from '../lib/data.js';

describe('SevenHourForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHourForecast />)
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

})
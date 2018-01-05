import React from 'react';
import { mount, shallow } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';
import { data } from '../lib/data.js';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />)
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

})
import React from 'react';
import { mount, shallow } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';
import { data } from '../test/data.js';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather weather={data} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start with props', () => {
    expect(wrapper.instance().props.weather).toEqual(data);
  });

  it('should render section, div, article, h3 and p elements', () => {
    expect(wrapper.find('section').length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('article').length).toEqual(2);
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(6);
    expect(wrapper.find('img').length).toEqual(1);
  });

})
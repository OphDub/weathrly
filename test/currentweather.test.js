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

  it('should say what we expect', () => {
    expect(wrapper.find('.location').text()).toEqual('Louisville, KY');
    expect(wrapper.find('.date').text()).toEqual('Wed, 20 Dec 2017 11:27:36 -0500');
    expect(wrapper.find('.temp').text()).toEqual('46 °F');
    expect(wrapper.find('.high').text()).toEqual('High: 51 °F');
    expect(wrapper.find('.low').text()).toEqual('Low: 32 °F');
    expect(wrapper.find('.summary').text()).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.');
    expect(wrapper.find('.condition').text()).toEqual('Mostly Cloudy');
  });

})
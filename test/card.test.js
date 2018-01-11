import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from '../lib/Card.js';
import { data } from '../test/data.js';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card time={data.hourly_forecast[0].FCTTIME.civil}
                            icon={data.hourly_forecast[0].icon_url}
                            temp={data.hourly_forecast[0].temp.english} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start with props', () => {
    expect(wrapper.instance().props.time).toEqual(data.hourly_forecast[0].FCTTIME.civil);
    expect(wrapper.instance().props.icon).toEqual(data.hourly_forecast[0].icon_url);
    expect(wrapper.instance().props.temp).toEqual(data.hourly_forecast[0].temp.english);
  });

  it('should render paragraph and image elements', () => {
    expect(wrapper.find('p').length).toEqual(2);
    expect(wrapper.find('img').length).toEqual(1);
  });
  
})
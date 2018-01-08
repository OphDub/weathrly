import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js';
import { data } from '../lib/data.js';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it.skip('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it('should have an input and button', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should start with a searchLocation as an empty string and a suggestedCities array as an empty array', () => {
    expect(wrapper.state()).toEqual({ searchLocation: '', suggestedCities: []})
  });

  it('should start with props', () => {

  });

  it('should update city state on change', () => {

  });

  it('should update suggestedCities state with a suggestion array on change', () => {

  });

  it('should suggest cities after input is >= 3', () => {

  });

  it('should not make suggestions when input is a zip code', () => {

  });

  it('should run getWeatherData with the first element in the suggestCites state array when enter is pressed', () => {

  })

  it('should run getWeatherData with the first element in the suggestCites state array when button is clicked', () => {

  })
})
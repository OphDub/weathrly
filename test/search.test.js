import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js';
import { data } from '../test/data.js';
import { Trie } from '@ophdub/complete-me';

describe('Search', () => {
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Search compareCity={mockFunc}/>)
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it('should have an input and button', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should start with a searchLocation as an empty string and a suggestedCities array as an empty array', () => {
    expect(wrapper.state()).toEqual({ searchLocation: '', suggestedCities: []})
  });

  it('should update searchLocation and suggestedCities array on change within input', () => {
    expect(wrapper.state()).toEqual({ searchLocation: '', suggestedCities: []})

    wrapper.find('input').simulate('change', { target: { value: 'den'}})

    expect(wrapper.find('datalist').length).toEqual(1)
    expect(wrapper.find('options').length).toEqual(2)
    expect(wrapper.state()).toEqual({ searchLocation: 'den', suggestedCities: ["denver, co", "denton, tx"]})
  });

  it('should not make suggestions when input is a zip code', () => {
    expect(wrapper.state()).toEqual({ searchLocation: '', suggestedCities: []})

    wrapper.find('input').simulate('change', { target: { value: '80220'}})

    expect(wrapper.state()).toEqual({ searchLocation: '80220', suggestedCities: []})
  });

  it('should execute a function when button is clicked', () => {
    wrapper.find('input').simulate('change', { target: {value: '80016'} })
    wrapper.find('button').simulate('click')

    expect(mockFunc.mock.calls.length).toEqual(1)
  })
})
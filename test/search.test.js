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

})
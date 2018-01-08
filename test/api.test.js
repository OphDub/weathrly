import React from 'react';
import { mount, shallow } from 'enzyme';
import Api from '../lib/Api.js';
import { data } from '../lib/data.js';

describe('Api', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Api />)
  })

  it.skip('should exist', () => {

    expect(wrapper).toBeDefined()
  })

})
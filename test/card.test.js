import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from '../lib/Card.js';
import { data } from '../lib/data.js';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

})
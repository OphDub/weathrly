import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import { data } from '../lib/data.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

})
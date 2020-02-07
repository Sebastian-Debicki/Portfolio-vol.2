import React from 'react';
import About from '../../../containers/About/About';

import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<About />)
})

describe('<About/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one img', () => {
    expect(wrapper.find('img').length).toBe(1)
  })
})
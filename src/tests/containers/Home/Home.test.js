import React from 'react';
import Home from '../../../containers/Home/Home';

import { shallow } from 'enzyme';
import NavigationItem from '../../../components/Navigation/NavigationItem/NavigationItem';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Home />)
})

describe('<Home/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one NavigationItem', () => {
    expect(wrapper.find(NavigationItem).length).toBe(1)
  })
})
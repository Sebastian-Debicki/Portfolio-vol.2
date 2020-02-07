import React from 'react';
import Logo from '../../../components/Logo/Logo';

import { shallow } from 'enzyme';
import NavigationItem from '../../../components/Navigation/NavigationItem/NavigationItem';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Logo />)
})

describe('<Logo/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render one NavigationItem component', () => {
    expect(wrapper.find(NavigationItem).length).toBe(1);
  })
})
import React from 'react';
import NavigationItem from '../../../../components/Navigation/NavigationItem/NavigationItem';

import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

let wrapper, scrollToTopHandler;
beforeEach(() => {
  wrapper = shallow(<NavigationItem route="/some-route" class='some-class' exact={true} scrollToTopHandler={scrollToTopHandler} />);
})

describe('<NavigationItem', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has one NavLink', () => {
    expect(wrapper.find(NavLink).length).toBe(1)
  })

  it('has a correct route props', () => {
    expect(wrapper.find(NavLink).prop('to')).toEqual('/some-route')
  })

  it('has a correct class props', () => {
    expect(wrapper.find(NavLink).prop('className')).toEqual('some-class')
  })

  it('has a correct exact props', () => {
    expect(wrapper.find(NavLink).prop('exact')).toEqual(true)
  })
})
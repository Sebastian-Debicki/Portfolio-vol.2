import React from 'react';
import NavigationItems from '../../../../components/Navigation/NavigationItems/NavigationItems';

import { shallow } from 'enzyme';
import NavigationItem from '../../../../components/Navigation/NavigationItem/NavigationItem';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavigationItems />)
})

describe('<NavigationItems/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('renders four NavigationItem components', () => {
    expect(wrapper.find(NavigationItem).length).toBe(4)
  })

  it('div navigation a correct className by defult', () => {
    expect(wrapper.find('div').prop('className')).toEqual('navigation')
  })

  it('ul list a correct className by defult', () => {
    expect(wrapper.find('ul').prop('className')).toEqual('navigation__items')
  })

  it('div navigation has a correct class Name when props openNav is true', () => {
    wrapper.setProps({ openNav: true })
    expect(wrapper.find('div').prop('className')).toBe('navigation navigation--open')
  })

  it('div navigation has a correct class Name when props openNav is false and touched is true', () => {
    wrapper.setProps({ openNav: false, touched: true })
    expect(wrapper.find('div').prop('className')).toBe('navigation navigation--close')
  })

  it('ul list has a correct class Name when props openNav is true', () => {
    wrapper.setProps({ openNav: true })
    expect(wrapper.find('ul').prop('className')).toBe('navigation__items navigation__items--open')
  })

  it('ul list has a correct class Name when props openNav is false and touched is true', () => {
    wrapper.setProps({ openNav: false, touched: true })
    expect(wrapper.find('ul').prop('className')).toBe('navigation__items navigation__items--close')
  })
})
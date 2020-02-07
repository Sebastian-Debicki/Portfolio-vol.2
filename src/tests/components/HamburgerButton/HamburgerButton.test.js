import React from 'react';
import HamburgerButton from '../../../components/HamburgerButton/HamburgerButton';

import { shallow } from 'enzyme';

let wrapper, togglerNavHandler;
beforeEach(() => {
  togglerNavHandler = jest.fn()
  wrapper = shallow(<HamburgerButton togglerNavHandler={togglerNavHandler} />);
})

describe('<HamburgerButton', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render correct number of span elements', () => {
    expect(wrapper.find('span').length).toBe(3)
  })

  it('run togglerNavHandler function when user click the button', () => {
    wrapper.simulate('click');
    expect(togglerNavHandler).toHaveBeenCalled()
  })

  it('has a correct class by default', () => {
    expect(wrapper.find('span').at(0).prop('className')).toEqual('hamburger__item hamburger__item-1')
    expect(wrapper.find('span').at(1).prop('className')).toEqual('hamburger__item hamburger__item-2')
    expect(wrapper.find('span').at(2).prop('className')).toEqual('hamburger__item hamburger__item-3')
  })

  it('has a correct class when the props "open = true"', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.find('span').at(0).prop('className')).toEqual('hamburger__item hamburger__item-1 open')
    expect(wrapper.find('span').at(1).prop('className')).toEqual('hamburger__item hamburger__item-2 open')
    expect(wrapper.find('span').at(2).prop('className')).toEqual('hamburger__item hamburger__item-3 open')
  })
})
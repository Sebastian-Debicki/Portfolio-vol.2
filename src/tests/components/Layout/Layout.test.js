import React from 'react';
import Layout from '../../../components/Layout/Layout';

import { mount } from 'enzyme';
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';
import HamburgerButton from '../../../components/HamburgerButton/HamburgerButton';
import Backdrop from '../../../components/Backdrop/Backdrop';
import Logo from '../../../components/Logo/Logo';
import Footer from '../../../components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';

describe('<Layout/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Router><Layout>some-children-props</Layout></Router>);
  })

  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has a correct children props', () => {
    expect(wrapper.find('main').prop('children')).toBe('some-children-props')
  })

  it('render NavigationItems Component', () => {
    expect(wrapper.find(NavigationItems).length).toBe(1)
  })

  it('render HamburgerButton Component', () => {
    expect(wrapper.find(HamburgerButton).length).toBe(1)
  })

  it('render Backdrop Component', () => {
    expect(wrapper.find(Backdrop).length).toBe(1)
  })

  it('render Logo Component', () => {
    expect(wrapper.find(Logo).length).toBe(1)
  })

  it('render Footer Component', () => {
    expect(wrapper.find(Footer).length).toBe(1)
  })
})

import React from 'react';
import Footer from '../../../components/Footer/Footer';

import { shallow } from 'enzyme';
import NavigationItem from '../../../components/Navigation/NavigationItem/NavigationItem';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Footer />)
})

describe('<Footer/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render four NavigationItem components', () => {
    expect(wrapper.find(NavigationItem).length).toBe(5)
  })

  it('has a correct link in github button', () => {
    expect(wrapper.find('a').at(0).prop('href')).toEqual('https://github.com/ssebaa9')
  })

  it('has a correct link in linkedin button', () => {
    expect(wrapper.find('a').at(1).prop('href')).toEqual('https://www.linkedin.com/in/sebastian-d%C4%99bicki-6604a0198/?locale=en_US')
  })

  it('has a correct link in facebook button', () => {
    expect(wrapper.find('a').at(2).prop('href')).toEqual('https://www.facebook.com/sebastian.debicki5?ref=bookmarks')
  })

  it('has a correct link in instagram button', () => {
    expect(wrapper.find('a').at(3).prop('href')).toEqual('https://www.instagram.com/ssebaa9/?hl=pl')
  })
})
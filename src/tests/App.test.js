import React from 'react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Layout from '../components/Layout/Layout';
import Home from '../containers/Home/Home';
import Projects from '../containers/Projects/Projects';
import Contact from '../containers/Contact/Contact';
import About from '../containers/About/About';

let wrapper;
beforeEach(() => {
  wrapper = mount(<MemoryRouter><App /></MemoryRouter>)
})

describe('<App/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render Layout component', () => {
    expect(wrapper.find(Layout).length).toBe(1)
  })

  it('render Home component by default', () => {
    expect(wrapper.find(Home).length).toBe(1);
    expect(wrapper.find(Projects).length).toBe(0);
    expect(wrapper.find(Contact).length).toBe(0);
    expect(wrapper.find(About).length).toBe(0);
  })

  it('render Projects component when the route is "/projects"', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/projects']}><App /></MemoryRouter>)
    expect(wrapper.find(Projects).length).toBe(1);
    expect(wrapper.find(Home).length).toBe(0);
    expect(wrapper.find(Contact).length).toBe(0);
    expect(wrapper.find(About).length).toBe(0);
  })

  it('render About component when the route is "/about"', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/about']}><App /></MemoryRouter>)
    expect(wrapper.find(About).length).toBe(1);
    expect(wrapper.find(Projects).length).toBe(0);
    expect(wrapper.find(Home).length).toBe(0);
    expect(wrapper.find(Contact).length).toBe(0);
  })

  it('render Contact component when the route is "/contact"', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/contact']}><App /></MemoryRouter>)
    expect(wrapper.find(Contact).length).toBe(1);
    expect(wrapper.find(About).length).toBe(0);
    expect(wrapper.find(Projects).length).toBe(0);
    expect(wrapper.find(Home).length).toBe(0);
  })

})
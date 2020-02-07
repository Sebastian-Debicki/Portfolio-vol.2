import React from 'react';
import Projects from '../../../containers/Projects/Projects';
import { projects } from '../../../data/projectsData';

import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Projects />);
})

describe('<Projects/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('renders correct number of projects', () => {
    expect(wrapper.find(`[data-test="project"]`).length).toBe(projects.length)
  })
})
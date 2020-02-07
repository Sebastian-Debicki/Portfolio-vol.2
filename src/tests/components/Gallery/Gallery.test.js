import React from 'react';
import Gallery from '../../../components/Gallery/Gallery';

import { shallow } from 'enzyme';
import ReactSwipe from 'react-swipe';

const images = ['img1', 'img2', 'img3']

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Gallery images={images} />)
})

describe('<Gallery/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render ReactSwipe component', () => {
    expect(wrapper.find(ReactSwipe).length).toBe(1)
  })

  it('render correct number of images', () => {
    expect(wrapper.find('img').length).toBe(images.length)
  })
})
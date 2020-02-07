import React from 'react';
import Contact from '../../../containers/Contact/Contact';

import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Contact />)
})

describe('<Contact/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('change emial state when user type in email input', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'some-email-value' } })
    expect(wrapper.state('email')).toEqual('some-email-value')
  })

  it('change title state when user type in title input', () => {
    wrapper.find('input').at(1).simulate('change', { target: { value: 'some-title-value' } })
    expect(wrapper.state('title')).toEqual('some-title-value')
  })

  it('change message state when user type in message input', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'some-message-value' } })
    expect(wrapper.state('message')).toEqual('some-message-value')
  })

  it('clean all input fields when user send message', () => {
    wrapper.setState({ email: 'some-email', title: 'some-title', message: 'some-message' })
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(wrapper.state('email')).toEqual('')
    expect(wrapper.state('title')).toEqual('')
    expect(wrapper.state('message')).toEqual('')
  })
})
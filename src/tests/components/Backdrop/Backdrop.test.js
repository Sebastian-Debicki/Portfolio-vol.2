import React from 'react';
import Backdrop from '../../../components/Backdrop/Backdrop';
import { shallow } from 'enzyme';

let wrapper, closeNavHandler;

beforeEach(() => {
  closeNavHandler = jest.fn();
  wrapper = shallow(<Backdrop closeNavHandler={closeNavHandler} />);
})

describe('<Backdrop/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('has a correct class by default', () => {
    expect(wrapper.prop('className')).toBe('backdrop')
  })

  it('has a correct class when the props "open" is true', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.prop('className')).toBe('backdrop backdrop--open')
  })

  it('run closenavHandler function when the user clicked in Backdrop', () => {
    wrapper.setProps({ open: true })
    wrapper.find('div').simulate('click');
    expect(closeNavHandler).toHaveBeenCalled()
  })
})
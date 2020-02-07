import React from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';

const NavigationItem = (props) => {

  const scrollToTopHandler = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  }

  return (
    <NavLink onClick={scrollToTopHandler} className={props.class} to={props.route} exact>{props.children}</NavLink>
  );
}

export default NavigationItem;
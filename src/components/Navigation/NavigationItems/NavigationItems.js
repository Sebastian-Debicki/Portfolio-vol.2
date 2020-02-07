import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => {

  let navigationClass = 'navigation'
  if (props.openNav) {
    navigationClass = navigationClass + ' navigation--open'
  } else if (!props.openNav && props.touched) {
    navigationClass = navigationClass + ' navigation--close'
  }


  let navigationItemsClass = 'navigation__items'
  if (props.openNav) {
    navigationItemsClass = navigationItemsClass + ' navigation__items--open'
  } else if (!props.openNav && props.touched) {
    navigationItemsClass = navigationItemsClass + ' navigation__items--close'
  }

  return (
    <div className={navigationClass} onClick={props.closeNavHandler}>
      <nav className="navigation__box">
        <ul className={navigationItemsClass}>
          <li className="navigation__items__item"><NavigationItem route="/" class="btn btn--link" exact>Home</NavigationItem></li>
          <li className="navigation__items__item"><NavigationItem route="/projects" class="btn btn--link">Projects</NavigationItem></li>
          <li className="navigation__items__item"><NavigationItem route="/about" class="btn btn--link">About</NavigationItem></li>
          <li className="navigation__items__item"><NavigationItem route="/contact" class="btn btn--link">Contact</NavigationItem></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationItems;
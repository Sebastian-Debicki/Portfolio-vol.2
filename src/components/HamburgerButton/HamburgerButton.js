import React from 'react';

const HamburgerButton = (props) => {

  return (
    <button className="hamburger" onClick={props.togglerNavHandler}>
      <div className="hamburger__items">
        <span className={props.open ? "hamburger__item hamburger__item-1 open" : "hamburger__item hamburger__item-1"}></span>
        <span className={props.open ? "hamburger__item hamburger__item-2 open" : "hamburger__item hamburger__item-2"}></span>
        <span className={props.open ? "hamburger__item hamburger__item-3 open" : "hamburger__item hamburger__item-3"}></span>
      </div>
    </button>
  );
}

export default HamburgerButton;
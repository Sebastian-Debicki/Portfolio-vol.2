import React from 'react';

const Backdrop = (props) => {
  return (
    <div className={props.open ? 'backdrop backdrop--open' : 'backdrop'} onClick={props.closeNavHandler}></div>
  );
}

export default Backdrop;
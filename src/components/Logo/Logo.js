import React from 'react';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';

const Logo = (props) => {
  return (
    <div className="logo" onClick={props.closeNavHandler}>
      <NavigationItem class="btn btn--logo" route="/"><span>{`<>Dębicki_`}</span><span className="logo__animate">|</span><span>{`</>`}</span></NavigationItem>
    </div>
  );
}

export default Logo;
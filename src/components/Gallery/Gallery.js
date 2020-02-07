import React from 'react';
import ReactSwipe from 'react-swipe';

const Gallery = (props) => {
  let reactSwipeEl;

  return (

    <div className="gallery">
      <ReactSwipe
        className="gallery__carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >

        {props.images.map((img) => <img src={img} alt="" key={img} className="gallery__img" />)}

      </ReactSwipe>
      <div className="gallery__buttons">
        <button className="btn btn__tertiary btn__tertiary--white" onClick={() => reactSwipeEl.prev()}><i className="fas fa-arrow-left gallery__icon"></i></button>
        <button className="btn btn__tertiary btn__tertiary--white" onClick={() => reactSwipeEl.next()}><i className="fas fa-arrow-right gallery__icon"></i></button>
      </div>
    </div>
  );
};

export default Gallery;
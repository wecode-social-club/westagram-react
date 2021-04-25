import React, { useState } from 'react';
import './Images.scss';

function Images(props) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const handlePreviousImage = () => {
    if (currentImgIdx > 0) {
      setCurrentImgIdx(currentImgIdx - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImgIdx < props.imgs.length - 1) {
      setCurrentImgIdx(currentImgIdx + 1);
    }
  };

  return (
    <div className="Images">
      <img className="feedImage" alt="feed" src={props.imgs[currentImgIdx]} />
      <button className="moveButton prevButton" onClick={handlePreviousImage}>
        {'<'}
      </button>
      <button className="moveButton nextButton" onClick={handleNextImage}>
        {'>'}
      </button>
      <ul className="orderCircleContainer">
        {props.imgs.map((_, idx) => (
          <li
            style={{
              backgroundColor: currentImgIdx === idx ? '#0095f6' : '#a8a8a8',
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Images;

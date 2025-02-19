import React from 'react';
import './commonButton.css';

const CommonButton = ({buttonValue, textColor}) => {
  return (
    <>
      <a href="#" className={`common-btn ${textColor}`}>{buttonValue}</a>
    </>
  )
}

export default CommonButton;

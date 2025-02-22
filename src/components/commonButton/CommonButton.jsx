import React,{useEffect} from 'react';
import './commonButton.css';

const CommonButton = ({buttonValue, textColor}) => {

  return (
    <>
      <a href="#" className={`common-btn ${textColor}`} data-aos="zoom-out">{buttonValue}</a>
    </>
  )
}

export default CommonButton;

import React from 'react';
import './homelink.css';

const HomeLink = ({ handleOnClick }) => {
  return <div onClick={handleOnClick} className='home-link'></div>;
};

export default HomeLink;

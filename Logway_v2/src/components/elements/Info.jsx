import React from "react";

const Info = ({ img, text }) => {
  return (
    <div className='info'>
      <img src={img} alt='' className='info-img' />
      <p>{text}</p>
    </div>
  );
};

export default Info;

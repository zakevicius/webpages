import React from 'react';

const Button = ({ text, type }) => {
  console.log(text, type);
  return (
    <button className={`btn btn-${type ? type : 'primary'}`}>
      {text}
    </button>
  );
};

export default Button;

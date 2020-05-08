import React, { useRef } from "react";
import "./tab.css";

const Tab = ({ data, handleTabClick, icon }) => {
  const tabRef = useRef();

  const handleOnClick = () => {
    // handleTabClick(tabRef.current.innerText, type, data);
    handleTabClick(data);
  };

  return (
    <div
      ref={tabRef}
      className={`tab flex all-centered ${data.type} ${icon}`}
      // onMouseEnter={handleOnClick}
      // onMouseLeave={handleOnClick}
      onClick={handleOnClick}>
      {data.text}
    </div>
  );
};

export default Tab;

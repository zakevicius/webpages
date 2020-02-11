import React from "react";
import Header from "./Header";
import Content from "./Content";

function Left(props) {
  return (
    <div className="leftDiv">
      <Header />
      <Content
        onProjectHover={props.onProjectHover}
        onProjectLeave={props.onProjectLeave}
      />
    </div>
  );
}

export default Left;

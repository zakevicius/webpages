import React, { useEffect } from "react";
import Content from "./Content";

function Left(props) {
  return (
    <div className="leftDiv">
      <Content
        onProjectHover={props.onProjectHover}
        onProjectLeave={props.onProjectLeave}
      />
    </div>
  );
}

export default Left;

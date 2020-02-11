import React from "react";
import Content from "./Content";
import IconList from "./IconList";

function Right(props) {
  return (
    <div className="rightDiv">
      <Content />
      <IconList toolsToHighlight={props.toolsToHighlight} />
    </div>
  );
}

export default Right;

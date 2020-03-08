import React, { useState } from "react";
import Content from "./Content";
import IconList from "./IconList";

function Right(props) {
  let top = 200;

  document.addEventListener("scroll", () => {
    if (window.pageYOffset < 200) {
      top = 200 - window.pageYOffset;
    } else {
      top = 0;
    }
    let self = document.querySelector(".rightDiv");
    self.style.top = top + "px";
    self.style.height = "calc(100vh - " + top + "px)";
  });

  return (
    <div className="rightDiv">
      {/* <Content /> */}
      <IconList toolsToHighlight={props.toolsToHighlight} />
    </div>
  );
}

export default Right;

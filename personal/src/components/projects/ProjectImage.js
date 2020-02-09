import React from "react";
import { StyledImageDiv, StyledImage } from "../../styles/projects";

function Project(props) {
  console.log(props);
  const expand = e => {
    e.target.parentNode.childNodes.forEach(node => {
      node.style.flexBasis = "0px";
      node.style.border = "none";
    });
    e.target.style.transform = "skew(0deg)";
    e.target.style.flexBasis = "100%";
    e.target.style.left = `0`;
    e.target.style.border = "1px solid black";
  };
  const shrink = e => {
    e.target.parentNode.childNodes.forEach(node => {
      node.style.flexBasis = "30%";
      node.style.border = "1px solid black";
    });
    e.target.style.transform = "skew(-30deg)";
  };

  return (
    <StyledImageDiv
      left={props.left}
      onMouseOver={expand}
      onMouseLeave={shrink}
    >
      {/* <StyledImage></StyledImage> */}
    </StyledImageDiv>
  );
}

export default Project;

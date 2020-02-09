import React, { useState } from "react";
import { StyledImageDiv, StyledImage } from "../../styles/projects";
import { color } from '../../styles/main'

const { white, orange, grey, dark } = color;

function Project(props) {
  const [expanded, setExpanded] = useState(0);

  const handleOnClick = (e) => {
    if (!expanded) {
      expand(e);
    }
  }

  const expand = e => {
    e.target.parentNode.childNodes.forEach(node => {
      node.style.flexBasis = "0px";
      node.style.border = "none";
    });
    e.target.style.transform = "skew(0deg)";
    e.target.style.flexBasis = "100%";
    e.target.style.left = `0`;
    e.target.style.border = "1px solid black";
    e.target.style.transform = "rotate(180deg)"
    setExpanded(1);
  };
  const shrink = e => {
    e.target.parentNode.childNodes.forEach(node => {
      node.style.flexBasis = "25%";
      node.style.border = "1px solid black";
    });
    e.target.style.transform = "skew(-15deg)";
    e.target.style.zIndex = "1";
    e.target.style.boxShadow = "none";
    setExpanded(0);
  };

  const handleMouseEnter = e => {
    e.target.style.transform = "skew(-15deg) scale(1.1)";
    e.target.style.boxShadow = `5px 5px 5px ${grey}, -5px -5px 5px ${grey}`;
    e.target.style.zIndex = '2';
  }

  return (
    <StyledImageDiv
      left={props.left}
      onClick={handleOnClick}
      onMouseLeave={shrink}
      onMouseEnter={handleMouseEnter}
    >
      {/* <StyledImage></StyledImage> */}
    </StyledImageDiv>
  );
}

export default Project;

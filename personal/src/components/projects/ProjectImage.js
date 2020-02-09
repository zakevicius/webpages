import React, { useState } from "react";

function ProjectImage(props) {
  const [expanded, setExpanded] = useState(0);

  const handleOnClick = e => {
    if (!expanded) {
      expand(e);
    } else {
      shrink(e);
    }
  };

  const expand = e => {
    e.target.parentNode.childNodes.forEach(node => {
      node.style.flexBasis = "0px";
      node.style.border = "none";
    });
    e.target.style.transform = "skew(0deg)";
    e.target.style.flexBasis = "100%";
    e.target.style.border = "1px solid #232020";
    e.target.style.transform = "rotate(180deg)";
    e.target.style.backgroundSize = "cover";

    setExpanded(1);
  };
  const shrink = e => {
    e.target.parentNode.childNodes.forEach(node => {
      node.style.flexBasis = "25%";
      node.style.border = "1px solid black";
      node.style.opacity = "1";
    });
    e.target.style.transform = "skew(-15deg)";
    e.target.style.zIndex = "1";
    e.target.style.boxShadow = "none";
    e.target.style.backgroundSize = "cover";
    setExpanded(0);
  };

  const handleMouseEnter = e => {
    e.target.parentNode.childNodes.forEach(node => {
      node.style.opacity = "0.3";
    });
    e.target.style.opacity = "1";
    e.target.style.transform = "skew(-15deg) scale(1.1)";
    e.target.style.boxShadow = `5px 5px 5px #3a3535, -5px -5px 5px #3a3535`;
    e.target.style.zIndex = "2";
  };

  return (
    <div
      className="projectImageDiv"
      onClick={handleOnClick}
      onMouseLeave={shrink}
      onMouseEnter={handleMouseEnter}
      style={{
        background: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 30%"
      }}
    >
      {/* <StyledImage></StyledImage> */}
    </div>
  );
}

export default ProjectImage;

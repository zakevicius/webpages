import React, { useState } from "react";

function ProjectImage(props) {
  const [expanded, setExpanded] = useState(0);
  const [locked, setLocked] = useState(0);

  const handleOnClick = e => {
    if (!expanded) {
      expand(e);
    } else {
      shrink(e);
    }
  };

  const expand = e => {
    if (!locked && !expanded) {
      e.target.parentNode.childNodes.forEach(node => {
        node.style.flexBasis = "0px";
        node.style.border = "none";
      });
      e.target.style.transform = "skew(0deg)";
      e.target.style.flexBasis = "100%";
      e.target.style.border = "1px solid #232020";
      e.target.style.backgroundSize = "cover";
      e.target.style.filter = "grayscale(0)";
      setLocked(1);
      setExpanded(1);
      setTimeout(() => {
        setLocked(0);
      }, 300);
    }
  };
  const shrink = e => {
    if (!locked) {
      e.target.parentNode.childNodes.forEach(node => {
        node.style.flexBasis = "25%";
        node.style.border = "1px solid black";
        node.style.opacity = "0.8";
      });
      e.target.style.transform = "skew(-15deg)";
      e.target.style.zIndex = "1";
      e.target.style.boxShadow = "none";
      e.target.style.backgroundSize = "cover";
      e.target.style.filter = "grayscale(0.8)";
      setLocked(1);
      setTimeout(() => {
        setLocked(0);
        setExpanded(0);
      }, 300);
    }
  };

  const handleMouseEnter = e => {
    if (!locked && !expanded) {
      e.target.parentNode.childNodes.forEach(node => {
        node.style.opacity = "0.3";
      });
      e.target.style.opacity = "1";
      e.target.style.transform = "skew(-15deg) scale(1.1)";
      e.target.style.boxShadow = `5px 5px 5px #3a3535, -5px -5px 5px #3a3535`;
      e.target.style.zIndex = "2";
    }
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

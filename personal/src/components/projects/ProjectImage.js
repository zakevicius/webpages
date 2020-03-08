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
      e.target.style.backgroundSize = "cover";
      e.target.style.filter = "grayscale(0)";
      e.target.style.boxShadow = `10px 10px 20px -10px #711e71`;
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
        node.style.opacity = "0.8";
      });
      e.target.style.transform = "skew(-15deg)";
      e.target.style.zIndex = "1";
      e.target.style.boxShadow = `10px 10px 20px 0px #711e71`;
      e.target.style.backgroundSize = "cover";
      e.target.style.filter = "grayscale(1)";
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
      e.target.style.boxShadow = `0px 0px 20px 0px #711e71`;
      e.target.style.zIndex = "2";
      e.target.style.filter = "grayscale(0.5)";
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

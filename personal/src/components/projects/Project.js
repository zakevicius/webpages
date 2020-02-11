import React from "react";
import ProjectImage from "./ProjectImage";

function Project(props) {
  const renderImage = () => {
    let sources = [...props.src];
    return sources.map((src, i) => <ProjectImage src={src} key={i} />);
  };

  const style = {
    width: "20px",
    height: "20px",
    position: "absolute",
    zIndex: "3"
  };

  return (
    <div
      className="projectDiv"
      onMouseEnter={() => props.onProjectHover(props.tools)}
      onMouseLeave={props.onProjectLeave}
    >
      <div style={{ ...style, top: "10px", left: "10px" }}>I</div>
      {renderImage()}
      <div style={{ ...style, bottom: "10px", right: "10px" }}>T</div>
    </div>
  );
}

export default Project;

import React from "react";
import { ProjectDiv } from "../../styles/projects";
import ProjectImage from "./ProjectImage";

function Project() {
  const renderImage = () => {
    let left = 10;
    let images = [-1, -2, -3, -4];
    return images.map(img => <ProjectImage left={left * img} key={img} />);
  };

  const style = {
    width: "20px",
    height: "20px",
    position: "absolute",
    zIndex: "2"
  };

  return (
    <ProjectDiv>
      <div style={{ ...style, top: "10px", left: "10px" }}>I</div>
      {renderImage()}
      <div style={{ ...style, bottom: "10px", right: "10px" }}>T</div>
    </ProjectDiv>
  );
}

export default Project;

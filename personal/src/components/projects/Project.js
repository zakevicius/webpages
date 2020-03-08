import React, { useEffect } from "react";
import ProjectImage from "./ProjectImage";

function Project(props) {
  useEffect(() => {
    document.querySelectorAll(".projectMain").forEach(project => {
      project.style.opacity = 1;
    });
  });

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

  const renderProject = () => {
    return <div className="projectDiv">{renderImage()}</div>;
  };

  const renderProjectInfo = () => {
    return (
      <div className="projectInfoDiv">
        <h1>{props.description.title}</h1>
        <ul>
          {props.description.li.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
        <p className="additionalInfo">
          {props.description.additional ? (
            props.description.additional
          ) : (
            <a
              href={props.description.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              See live
            </a>
          )}
        </p>
      </div>
    );
  };

  return (
    <div
      className="projectMain"
      onTouchStart={() => props.onProjectHover(props.tools)}
      onMouseEnter={() => props.onProjectHover(props.tools)}
      onMouseLeave={props.onProjectLeave}
    >
      {props.align === "left" || window.innerWidth < 1500
        ? renderProject()
        : renderProjectInfo()}
      {props.align === "left" || window.innerWidth < 1500
        ? renderProjectInfo()
        : renderProject()}
    </div>
  );
}

export default Project;

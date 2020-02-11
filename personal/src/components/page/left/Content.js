import React from "react";
import ProjectList from "../../projects/ProjectList";

function Content(props) {
  return (
    <div className=".leftDivContent">
      <ProjectList
        onProjectHover={props.onProjectHover}
        onProjectLeave={props.onProjectLeave}
      />
    </div>
  );
}

export default Content;

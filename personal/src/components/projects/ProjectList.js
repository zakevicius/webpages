import React from "react";
import Project from "./Project";

import appLogway1 from "../../assets/appLogway/appLogway1.jpg";
import appLogway2 from "../../assets/appLogway/appLogway2.jpg";
import appLogway3 from "../../assets/appLogway/appLogway3.jpg";
import appLogway4 from "../../assets/appLogway/appLogway4.jpg";

function ProjectList() {
  const project1 = [appLogway1, appLogway2, appLogway3, appLogway4];
  const project2 = [0, 1, 2, 3];
  const project3 = [0, 1, 2, 3];
  const project4 = [0, 1, 2, 3];

  return (
    <div className="projectListDiv">
      <Project src={project1} />
      <Project src={project2} />
      <Project src={project3} />
      <Project src={project4} />
    </div>
  );
}

export default ProjectList;

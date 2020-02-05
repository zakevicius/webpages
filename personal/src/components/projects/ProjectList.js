import React from "react";
import { ProjectListDiv } from "../../styles/projects";
import Project from "./Project";

function ProjectList() {
  return (
    <ProjectListDiv>
      <Project />
      <Project />
      <Project />
      <Project />
    </ProjectListDiv>
  );
}

export default ProjectList;

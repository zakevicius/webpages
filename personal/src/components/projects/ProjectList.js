import React from "react";
import Project from "./Project";

import appLogway1 from "../../assets/appLogway/appLogway1.jpg";
import appLogway2 from "../../assets/appLogway/appLogway2.jpg";
import appLogway3 from "../../assets/appLogway/appLogway3.jpg";
import appLogway4 from "../../assets/appLogway/appLogway4.jpg";
import logway1 from "../../assets/logway/logway1.jpg";
import logway2 from "../../assets/logway/logway2.jpg";
import logway3 from "../../assets/logway/logway3.jpg";
import logway4 from "../../assets/logway/logway4.jpg";
import mine1 from "../../assets/mine/mine1.jpg";
import mine2 from "../../assets/mine/mine2.jpg";
import mine3 from "../../assets/mine/mine3.jpg";
import mine4 from "../../assets/mine/mine4.jpg";

function ProjectList(props) {
  const projects = [
    {
      tools: [
        "html",
        "css",
        "js",
        "react",
        "redux",
        "express",
        "nodejs",
        "mongodb",
        "api",
        "json",
        "git",
        "semanticui"
      ],
      images: [appLogway1, appLogway2, appLogway3, appLogway4]
    },
    {
      tools: ["html", "css", "js", "php", "git"],
      images: [logway1, logway2, logway3, logway4]
    },
    {
      tools: ["html", "css", "js", "git"],
      images: [mine1, mine2, mine3, mine4]
    },
    {
      tools: [
        "html",
        "css",
        "js",
        "bootstrap",
        "nodejs",
        "react",
        "api",
        "json",
        "heroku",
        "git"
      ],
      images: [0, 1, 2, 3]
    },
    {
      tools: [
        "html",
        "css",
        "js",
        "php",
        "mysql",
        "jquery",
        "git",
        "api",
        "json",
        "ajax"
      ],
      images: [0, 1, 2, 3]
    },
    {
      tools: [
        "html",
        "css",
        "js",
        "bootstrap",
        "nodejs",
        "react",
        "api",
        "json",
        "heroku",
        "git"
      ],
      images: [0, 1, 2, 3]
    }
  ];

  const renderProjects = () => {
    return projects.map((project, i) => (
      <Project
        src={project.images}
        tools={project.tools}
        onProjectHover={props.onProjectHover}
        onProjectLeave={props.onProjectLeave}
        key={i}
      />
    ));
  };

  return <div className="projectListDiv">{renderProjects()}</div>;
}

export default ProjectList;

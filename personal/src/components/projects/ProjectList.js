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
import scrape1 from "../../assets/scrape/scrape1.jpg";
import scrape2 from "../../assets/scrape/scrape2.jpg";
import scrape3 from "../../assets/scrape/scrape3.jpg";
import scrape4 from "../../assets/scrape/scrape4.jpg";
import custbroker1 from "../../assets/custbroker/custbroker1.jpg";
import custbroker2 from "../../assets/custbroker/custbroker2.jpg";
import custbroker3 from "../../assets/custbroker/custbroker3.jpg";
import custbroker4 from "../../assets/custbroker/custbroker4.jpg";

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
      images: [appLogway1, appLogway2, appLogway3, appLogway4],
      description: {
        title: "Order management system for warehouse",
        li: [
          "Cargo information",
          "Cargo loading to truck information",
          "Documents and photos upload",
          "Information by client",
          "Authorization with tokens",
          "Different access levels",
          "Backend and frontend"
        ],
        additional: ["Contact me for a demo access"],
        link: "https://mzh.lt"
      }
    },
    {
      tools: ["html", "css", "js", "php", "git"],
      images: [logway1, logway2, logway3, logway4],
      description: {
        title: "First live webpage",
        li: [
          "Webpage for logistics company",
          "Contact list",
          "Contact form",
          "Google maps",
          "Language selection"
        ],
        link: "https://logway1.lt"
      }
    },
    {
      tools: ["html", "css", "js", "git"],
      images: [mine1, mine2, mine3, mine4],
      description: {
        title: "First game made while learning Javascript",
        li: [
          "Minesweeper clone",
          "Different difficulty levels",
          "Time manipulation"
        ],
        link: "http://mine.mzh.lt"
      }
    },
    {
      tools: ["html", "css", "js", "git"],
      images: [custbroker1, custbroker2, custbroker3, custbroker4],
      description: {
        title: "Demo website for another company",
        li: [
          "Webpage for logistics company",
          "Contact list",
          "Google maps",
          "Expanding information"
        ],
        link: "http://custbroker.mzh.lt/"
      }
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
      images: [scrape1, scrape2, scrape3, scrape4],
      description: {
        title: "Information scraping from a local television website",
        li: [
          "Information about shows playing at the moment",
          "Detailed information and links for access",
          "Backend and frontend setup on Heroku"
        ],
        link: "https://scrape-client.herokuapp.com/"
      }
    }
  ];

  const renderProjects = () => {
    let align;
    return projects.map((project, i) => {
      i % 2 ? (align = "right") : (align = "left");
      return (
        <Project
          src={project.images}
          tools={project.tools}
          description={project.description}
          onProjectHover={props.onProjectHover}
          onProjectLeave={props.onProjectLeave}
          key={i}
          align={align}
        />
      );
    });
  };

  return <div className="projectListDiv">{renderProjects()}</div>;
}

export default ProjectList;

import React from "react";
import Github from "../github/Github";
import Divider from "./Divider";
import ProjectList from "../projects/ProjectList";
import IconList from "../projects/IconList";

function Main() {
	return (
		<div className="container">
			<Divider title="My works" id="projects" />
			<ProjectList />
			<Divider title="My Github" id="github" />
			<Github />
			<Divider title="Tools I've worked with" id="tools" />
			<IconList type="section" />
		</div>
	);
}

export default Main;

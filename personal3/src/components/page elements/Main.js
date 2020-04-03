import React from "react";
import Github from "../github/Github";
import ProjectList from "../projects/ProjectList";

function Main() {
	return (
		<div className="container">
			<ProjectList />
			<Github />
		</div>
	);
}

export default Main;

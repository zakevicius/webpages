import React from "react";
import Project from "./Project";
import images from "./images";

let projects = require("./projects.json");

class ProjectList extends React.Component {
	constructor(props) {
		super(props);
		this.projectDescription = React.createRef();
	}

	state = {
		from: "",
		activeProject: 0,
		projects: projects.projects,
		changeDescription: true
	};

	descriptionBlink = () => {
		this.setState({ changeDescription: false });
		this.projectDescription.current.style.opacity = 0;
		setTimeout(() => {
			this.setState({ changeDescription: true });
			this.projectDescription.current.style.opacity = 1;
		}, 500);
	};

	nextProject = () => {
		let index =
			this.state.activeProject + 1 < this.state.projects.length
				? this.state.activeProject + 1
				: 0;

		this.setState({
			from: "fromRight",
			activeProject: index
		});

		this.descriptionBlink();
	};

	prevProject = () => {
		let index =
			this.state.activeProject - 1 >= 0
				? this.state.activeProject - 1
				: this.state.projects.length - 1;

		this.setState({
			from: "fromLeft",
			activeProject: index
		});
		this.descriptionBlink();
	};

	setClassName = i => {
		let className = "project-container hidden";
		const activeProject = this.state.activeProject;

		if (i === activeProject) {
			className = `project-container active ${this.state.from}`;
		} else if (i === activeProject - 1) {
			className = "project-container left";
		} else if (i === activeProject + 1) {
			className = "project-container right";
		} else if (i < activeProject - 1) {
			className = "project-container hidden toLeft";
		} else if (i > activeProject + 1) {
			className = "project-container hidden toRight";
		}

		return className;
	};

	renderDescription = () => {
		let { title, li } = this.state.projects[
			this.state.activeProject
		].description;

		if (this.state.changeDescription) {
			return (
				<div className={`project-description`} ref={this.projectDescription}>
					<h2>{title}</h2>
					<ul>
						{li.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>
			);
		} else {
			return (
				<div
					className={`project-description`}
					ref={this.projectDescription}
				></div>
			);
		}
	};

	render() {
		return (
			<div className="projects section">
				{this.renderDescription()}
				<div className="projects-line">
					<div className="arrow left">
						{this.state.activeProject > 0 ? (
							<i
								className="fas fa-arrow-left fa-2x"
								onClick={this.prevProject}
							/>
						) : (
							""
						)}
					</div>
					{projects.projects.map((project, i) => (
						<Project
							active={this.state.activeProject}
							index={i}
							key={i}
							project={project}
							className={this.setClassName(i)}
							image={images[project.images[0]]}
						/>
					))}
					<div className="arrow right">
						{this.state.activeProject < projects.projects.length - 1 ? (
							<i
								className="fas fa-arrow-right fa-2x"
								onClick={this.nextProject}
							/>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectList;

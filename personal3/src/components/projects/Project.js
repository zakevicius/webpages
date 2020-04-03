import React from "react";
import IconList from "./IconList";

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.projectRef = React.createRef();
	}

	componentDidMount() {
		this.projectRef.current.style.backgroundImage = `url(${this.props.image}`;
	}

	render() {
		return (
			<div className={this.props.className}>
				<div className="project" ref={this.projectRef}>
					<IconList tools={this.props.project.tools} />
				</div>
			</div>
		);
	}
}

export default Project;

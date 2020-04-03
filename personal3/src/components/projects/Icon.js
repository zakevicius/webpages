import React from "react";

class Icon extends React.Component {
	constructor(props) {
		super(props);
		this.iconRef = React.createRef();
	}

	componentDidMount() {
		this.iconRef.current.style.backgroundImage = `url(${this.props.icon}`;
	}

	render() {
		return <div className="project-icon" ref={this.iconRef}></div>;
	}
}

export default Icon;

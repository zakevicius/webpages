import React from "react";

class Icon extends React.Component {
	constructor(props) {
		super(props);
		this.iconRef = React.createRef();
		this.type = props.tyoe;
	}

	componentDidMount() {
		this.iconRef.current.style.backgroundImage = `url(${this.props.icon}`;
	}

	getClassName() {
		switch (this.type) {
			case "section":
				return "icon";
			case "project":
				return "icon small";
			default:
				return "icon small";
		}
	}

	render() {
		return <div className={this.getClassName()} ref={this.iconRef}></div>;
	}
}

export default Icon;

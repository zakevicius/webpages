import React from "react";
import Icon from "./Icon";
import images from "./images";

class IconList extends React.Component {
	constructor(props) {
		super(props);
		this.images = images[images.length - 1];
		this.tools = this.images.map((image) => image.name);
		this.type = this.props.type;
	}

	getIcon = (tool) => {
		return this.images.filter((image) => image.name === tool)[0].src;
	};

	getClassName = () => {
		switch (this.props.type) {
			case "section":
				return "icon-list";
			case "project":
				return "icon-list small";
			default:
				return "icon-list small";
		}
	};

	renderWithinSection = () => {
		return <div className="section">{this.renderContent()}</div>;
	};

	renderContent = () => {
		const tools = this.props.tools || this.tools;
		return (
			<div className={this.getClassName()}>
				{tools.map((tool, i) => (
					<Icon key={i} icon={this.getIcon(tool)} type="project" />
				))}
			</div>
		);
	};

	render() {
		return this.type === "section"
			? this.renderWithinSection()
			: this.renderContent();
	}
}

export default IconList;

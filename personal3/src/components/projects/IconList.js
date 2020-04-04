import React from "react";
import Icon from "./Icon";
import images from "./images";

class IconList extends React.Component {
	constructor(props) {
		super(props);
		this.images = images[images.length - 1];
		this.tools = this.images.map((image) => image.name);
		this.type = this.props.type;
		this.iconListRef = React.createRef();
	}

	componentDidMount() {
		// if (this.state.tools) {
		// const leftoverTools = 5;
		// let numberOfColumns;
		// let i = 6;
		// for (i; i > 1; i--) {
		// 	if (leftoverTools % i > 4 || leftoverTools % i === 0) {
		// 		numberOfColumns = i;
		// 		break;
		// 	} else {
		// 		numberOfColumns = Math.floor(leftoverTools / i);
		// 	}
		// }
		// console.log(i, numberOfColumns);
		// this.iconListRef.current.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
		// }
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
			<div
				id={`${this.props.type === "section" ? "icon-list" : ""}`}
				className={this.getClassName()}
				ref={this.iconListRef}
			>
				{tools.map((tool, i) => (
					<Icon key={i} index={i} icon={this.getIcon(tool)} type={this.type} />
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

import React from "react";
import Icon from "./Icon";
import images from "./images";

class IconList extends React.Component {
	constructor(props) {
		super(props);
		this.images = images[images.length - 1];
	}

	getIcon = tool => {
		return this.images.filter(image => image.name === tool)[0].src;
	};

	render() {
		return (
			<div className="project-icon-list">
				{this.props.tools.map((tool, i) => (
					<Icon key={i} icon={this.getIcon(tool)} />
				))}
			</div>
		);
	}
}

export default IconList;

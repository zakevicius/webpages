import React from "react";

class Icon extends React.Component {
	constructor(props) {
		super(props);
		this.iconRef = React.createRef();
	}

	state = {
		styleSet: false,
	};

	componentDidMount() {
		this.iconRef.current.style.backgroundImage = `url(${this.props.icon}`;

		if (this.props.type === "section") {
			window.addEventListener("scroll", this.inView);
		}
	}

	inView = () => {
		const elRectTop = document
			.getElementById("icon-list")
			.getBoundingClientRect().top;
		const offset = 200;

		if (elRectTop < window.innerHeight - offset && !this.state.styleSet) {
			this.setStyle();
		} else if (this.state.styleSet) {
			window.removeEventListener("scroll", this.inView);
		}
	};

	setStyle = () => {
		let time = 0.1 * this.props.index;

		this.iconRef.current.style.transitionDelay = `${time}s`;

		if (this.iconRef.current.classList.contains("hidden")) {
			this.iconRef.current.style.transform = "translateY(0%)";
			this.iconRef.current.style.opacity = 1;
		}

		this.setState({ styleSet: 1 });
	};

	getClassName() {
		switch (this.props.type) {
			case "section":
				return "icon hidden";
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

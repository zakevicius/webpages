import React from "react";

class Loader extends React.Component {
	componentDidMount() {
		const loader = document.querySelector(".loader");
		const dots = loader.querySelectorAll("i");

		dots.forEach(dot => {
			setInterval(() => {
				dot.classList.add("up");
			}, 1000);
		});
	}

	render() {
		return (
			<div className="loader">
				<div className="loader-dots">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
				<h2>I am really trying to fetch some data</h2>
			</div>
		);
	}
}

export default Loader;

import React from "react";
import Button from "../elements/Button";

export default function Navbar() {
	const onClickHandler = id => {
		const bodyRectTop = document.body.getBoundingClientRect().top;
		const elRectTop = document.getElementById(id).getBoundingClientRect().top;

		window.scrollTo({
			top: elRectTop - bodyRectTop,
			left: 0,
			behavior: "smooth"
		});
	};

	return (
		<nav id="navbar" className="navbar">
			{/* <a href="#projects"> */}
			<Button
				additionalClass="btn-header"
				text="My works"
				type="link"
				id="projects"
				onClickHandler={onClickHandler}
			/>
			{/* </a> */}
			{/* <a href="#github"> */}
			<Button
				additionalClass="btn-header"
				text="My github"
				type="link"
				id="github"
				onClickHandler={onClickHandler}
			/>
			{/* </a> */}
			{/* <a href="#tools"> */}
			<Button
				additionalClass="btn-header"
				text="Tools"
				type="link"
				id="tools"
				onClickHandler={onClickHandler}
			/>
			{/* </a> */}
			<a href="http://cv.mzh.lt" target="_blank" rel="noreferrer noopener">
				<Button
					additionalClass="btn-header"
					text="My CV"
					type="link"
					id="tools"
					onClickHandler={onClickHandler}
				/>
			</a>
		</nav>
	);
}

import React from "react";
import Button from "../elements/Button";

export default function Navbar({ type, className, hideSidebar }) {
	const onClickHandler = (id) => {
		const bodyRectTop = document.body.getBoundingClientRect().top;
		const elRectTop = document.getElementById(id).getBoundingClientRect().top;

		window.scrollTo({
			top: elRectTop - bodyRectTop,
			left: 0,
			behavior: "smooth",
		});

		if (type === "aside") {
			hideSidebar();
		}
	};

	return (
		<nav id={`navbar-${type}`} className={className}>
			{/* <a href="#projects"> */}
			<Button
				additionalClass={`btn-navbar ${type}`}
				text="My works"
				type="link"
				id="projects"
				onClickHandler={onClickHandler}
			/>
			{/* </a> */}
			{/* <a href="#github"> */}
			<Button
				additionalClass={`btn-navbar ${type}`}
				text="My github"
				type="link"
				id="github"
				onClickHandler={onClickHandler}
			/>
			{/* </a> */}
			{/* <a href="#tools"> */}
			<Button
				additionalClass={`btn-navbar ${type}`}
				text="Tools"
				type="link"
				id="tools"
				onClickHandler={onClickHandler}
			/>
			{/* </a> */}
			<a href="http://cv.mzh.lt" target="_blank" rel="noreferrer noopener">
				<Button
					additionalClass={`btn-navbar link ${type}`}
					text="My CV"
					type="link"
					id="tools"
					onClickHandler={onClickHandler}
				/>
			</a>
		</nav>
	);
}

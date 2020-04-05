import React from "react";
import Button from "../elements/Button";

export default function Navbar({ type, className, hideSidebar }) {
	const onClickHandler = (id) => {
		if (id !== "cv") {
			const bodyRectTop = document.body.getBoundingClientRect().top;
			const elRectTop = document.getElementById(id).getBoundingClientRect().top;

			window.scroll({
				top: elRectTop - bodyRectTop,
				left: 0,
				behavior: "smooth",
			});
		} else {
			window.open("http://cv.mzh.lt", "_blank");
		}

		if (type === "aside") {
			hideSidebar();
		}
	};

	return (
		<nav id={`navbar-${type}`} className={className}>
			<Button
				additionalClass={`btn-navbar ${type}`}
				text="My works"
				type="hash"
				id="projects"
				onClickHandler={onClickHandler}
			/>
			<Button
				additionalClass={`btn-navbar ${type}`}
				text="My github"
				type="hash"
				id="github"
				onClickHandler={onClickHandler}
			/>
			<Button
				additionalClass={`btn-navbar ${type}`}
				text="Tools"
				type="hash"
				id="tools"
				onClickHandler={onClickHandler}
			/>
			<Button
				additionalClass={`btn-navbar ${type}`}
				text="My CV"
				type="link"
				id="cv"
				onClickHandler={onClickHandler}
			/>
		</nav>
	);
}

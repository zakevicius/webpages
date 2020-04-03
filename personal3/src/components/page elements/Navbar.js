import React from "react";
import Button from "../elements/Button";

export default function Navbar({ onClickHandler }) {
	return (
		<nav id="navbar" className="navbar">
			<Button
				additionalClass="btn-header"
				text="About me"
				type="link"
				onClickHandler={onClickHandler}
			/>
			<Button
				additionalClass="btn-header"
				text="My works"
				type="link"
				onClickHandler={onClickHandler}
			/>
			<Button
				additionalClass="btn-header"
				text="My github"
				type="link"
				onClickHandler={onClickHandler}
			/>
			<Button
				additionalClass="btn-header"
				text="Contact me"
				type="link"
				onClickHandler={onClickHandler}
			/>
		</nav>
	);
}

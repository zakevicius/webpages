import React from "react";
import Navbar from "./Navbar";
import Button from "../elements/Button";

function Aside() {
	const onClickHandler = () => {
		const aside = document.querySelector("aside");
		aside.classList.toggle("hidden");
		const button = aside.querySelector(".btn-aside");
		button.classList.toggle("hidden");
	};

	const hideSidebar = () => {
		const aside = document.querySelector("aside");
		aside.classList.add("hidden");
		const button = aside.querySelector(".btn-aside");
		button.classList.add("hidden");
	};

	window.addEventListener("resize", hideSidebar);

	return (
		<aside className="aside hidden">
			<div className="aside-container">
				<Button
					additionalClass="btn-aside hidden"
					type="aside"
					onClickHandler={onClickHandler}
				/>
				<Navbar
					hideSidebar={hideSidebar}
					className="navbar aside"
					type="aside"
				/>
			</div>
		</aside>
	);
}

export default Aside;

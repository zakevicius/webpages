import React, { useRef, useEffect } from "react";
import cssVars from "../json/cssVars.json";
import "./tab.css";

const Tab = ({ data, handleTabClick, icon, tabStatus }) => {
	const tabRef = useRef();
	const colors = [cssVars.blue, cssVars.green, cssVars.orange];

	const handleOnClick = () => {
		handleTabClick(data);
	};

	const handleMouseEnter = () => {
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		tabRef.current.style.backgroundColor = randomColor;
	};

	const handleMouseLeave = () => {
		tabRef.current.style.backgroundColor = "#fff";
	};

	return (
		<div
			ref={tabRef}
			className={`tab flex all-centered ${data.type} ${icon}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleOnClick}
		>
			{data.text}
		</div>
	);
};

export default Tab;

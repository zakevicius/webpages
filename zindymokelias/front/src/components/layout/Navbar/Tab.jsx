import React, { useRef, useEffect } from "react";
import cssVars from "../../json/cssVars.json";
import "./tab.css";
import { Link } from "react-router-dom";

const Tab = ({ data, handleTabClick, icon, tabStatus }) => {
	const tabRef = useRef();
	const colors = [cssVars.blue, cssVars.green, cssVars.orange];
	const homePage = window.location.pathname === "/";

	useEffect(() => {}, [data.text]);

	const handleOnClick = () => {
		handleTabClick(data);
	};

	const handleMouseEnter = () => {
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		tabRef.current.style.color = randomColor;
	};

	const handleMouseLeave = () => {
		tabRef.current.style.color = cssVars.dark;
	};

	return (
		<div
			ref={tabRef}
			className={`tab flex all-centered ${data.type} ${icon ? icon : ""}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={homePage ? handleOnClick : console.log()}
		>
			{homePage ? (
				data.text
			) : (
				<Link to={{ pathname: "/", data: { ...data } }}>{data.text}</Link>
			)}
		</div>
	);
};

export default Tab;

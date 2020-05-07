import React, { useRef } from "react";
import "./tab.css";

const Tab = ({ type, data, handleTabClick }) => {
	const tabRef = useRef();

	const handleOnClick = () => {
		handleTabClick(tabRef.current.innerText, type, data);
	};

	return (
		<div
			ref={tabRef}
			className="tab flex all-centered"
			// onMouseEnter={handleOnClick}
			// onMouseLeave={handleOnClick}
			onClick={handleOnClick}
		>
			{data.text}
		</div>
	);
};

export default Tab;

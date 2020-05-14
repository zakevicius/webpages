import React, { useRef, useEffect } from "react";
import "./divider.css";
import cssVars from "../json/cssVars.json";

const Divider = () => {
	const dividerRef = useRef();

	const colors = [cssVars.blue, cssVars.green, cssVars.red, cssVars.orange];

	useEffect(() => {
		dividerRef.current.style.backgroundColor =
			colors[Math.floor(Math.random() * colors.length)];
	});

	return <div ref={dividerRef} className="divider"></div>;
};

export default Divider;

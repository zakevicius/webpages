import React, { useEffect } from "react";
import "./link.css";

const Link = ({ text }) => {
	useEffect(() => {}, [text]);
	return <div className="navbar-link flex all-centered">{text}</div>;
};

export default Link;

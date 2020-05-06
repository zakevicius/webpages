import React from "react";
import "./button.css";

const Button = ({ type = "primary", text }) => {
	return <button className={`btn btn-${type}`}>{text}</button>;
};

export default Button;

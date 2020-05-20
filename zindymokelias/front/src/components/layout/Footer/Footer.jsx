import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="flex right-X middle-Y section">
			Žindymo kelias &copy; {new Date().getFullYear()} Visos teisės saugomos
		</footer>
	);
};

export default Footer;

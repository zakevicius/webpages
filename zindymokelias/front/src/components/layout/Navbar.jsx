import React from "react";
import Link from "./Link.jsx";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="flex right-X middle-Y width">
			<Link text="Žindymas" />
			<Link text="Video" />
			<Link text="Klausimai ir atsakymai" />
			<Link text="Apie mane" />
		</nav>
	);
};

export default Navbar;

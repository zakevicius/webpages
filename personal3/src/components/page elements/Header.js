import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Button from "../elements/Button";

class Header extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		window.addEventListener("scroll", () => {
			const navbar = document.getElementById("navbar-primary");
			window.pageYOffset > 49
				? navbar.classList.add("fixed")
				: navbar.classList.remove("fixed");
		});
	}

	render() {
		return (
			<Fragment>
				<Navbar type="primary" className="navbar primary"></Navbar>
				<header id="header" className="header" />
			</Fragment>
		);
	}
}

export default Header;

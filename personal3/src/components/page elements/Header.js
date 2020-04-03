import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Button from "../elements/Button";

class Header extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		window.addEventListener("scroll", () => {
			const navbar = document.getElementById("navbar");
			window.pageYOffset > 49
				? navbar.classList.add("fixed")
				: navbar.classList.remove("fixed");
		});
	}

	onClickHandler = type => {
		console.log(type);
	};

	render() {
		return (
			<Fragment>
				<Navbar
					className="navbar"
					onClickHandler={this.onClickHandler}
				></Navbar>
				<header id="header" className="header">
					<Button
						additionalClass="btn-aside"
						type="aside"
						onClickHandler={this.onClickHandler}
					/>
				</header>
			</Fragment>
		);
	}
}

export default Header;

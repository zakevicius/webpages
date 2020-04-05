import React, { Fragment } from "react";
import Navbar from "./Navbar";

class Header extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	state = {
		text: [
			".header {",
			"background-image: url('the_best_I_could_find.jpeg');",
			"}",
		],
	};

	componentDidMount() {
		window.addEventListener("scroll", () => {
			const navbar = document.getElementById("navbar-primary");
			window.pageYOffset > 49
				? navbar.classList.add("fixed")
				: navbar.classList.remove("fixed");
		});

		this.blink();
	}

	blink = () => {
		const blink = document.getElementById("blink");
		setInterval(() => {
			blink.classList.toggle("hidden");
		}, 400);
	};

	render() {
		return (
			<Fragment>
				<Navbar type="primary" className="navbar primary"></Navbar>
				<header id="header" className="header">
					<div className="header-title">
						<pre>
							{this.state.text.map((line, i) => (
								<p className="code-line" key={i}>
									{line}
								</p>
							))}
							<span id="blink" className="blink">
								_
							</span>
						</pre>
					</div>
				</header>
			</Fragment>
		);
	}
}

export default Header;

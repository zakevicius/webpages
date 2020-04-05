import React from "react";

function Footer() {
	const getYear = () => {
		let d = new Date();
		return d.getFullYear();
	};
	return (
		<footer className="footer">
			Footer is delayed for reasons. &copy;{getYear()}
		</footer>
	);
}

export default Footer;

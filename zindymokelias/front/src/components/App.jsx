import React, { Fragment, useState } from "react";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Content from "./layout/Content.jsx";
import TabList from "./layout/TabList.jsx";
import "./app.css";

const App = () => {
	const [page, setPage] = useState();
	const [subPage, setSubPage] = useState();

	const handleOnClick = (page, type) => {
		if (type === "primary") {
			setPage(page);
			setSubPage(null);
		} else if (type === "secondary") {
			setSubPage(page);
		}
	};

	return (
		<Fragment>
			<Header />
			<TabList handleOnClick={handleOnClick} />
			<Content page={page} subPage={subPage} />
			<Footer />
		</Fragment>
	);
};

export default App;

import React, { Fragment, useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./history";
import PostContextProvider from "../contexts/PostContext.jsx";

import PrivateRoute from "../PrivateRoute.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Content from "./layout/Content.jsx";
import TabList from "./layout/TabList.jsx";
import HomeLink from "./elements/HomeLink.jsx";
import "./app.css";

const App = () => {
	const [page, setPage] = useState({ cat: "all" });

	useEffect(() => {}, [page]);

	const handleOnTabClick = (tab) => {
		setPage({ ...page, ...tab });
	};

	const handleOnHomeClick = () => {
		setPage({ cat: "all" });
		window.scrollTo(0, 0);
		history.push("/");
	};

	return (
		<Fragment>
			<Router history={history}>
				<Header />
				<HomeLink handleOnClick={handleOnHomeClick} />
				<TabList handleOnClick={handleOnTabClick} page={page} />
				<Switch>
					<PostContextProvider>
						<Route
							path="/"
							exact
							component={(props) => <Content page={page} {...props} />}
						/>
						<PrivateRoute
							path="/admin"
							exact
							component={(props) => <Content page="admin" {...props} />}
						/>
					</PostContextProvider>
				</Switch>
				<Footer />
			</Router>
		</Fragment>
	);
};

export default App;

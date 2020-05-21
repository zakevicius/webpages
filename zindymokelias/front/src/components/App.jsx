import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";

import MainContextProvider from "../contexts/MainContext.jsx";

import Header from "./layout/Header/Header.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import Main from "./layout/Main/Main.jsx";

import "./app.css";

const App = () => {
	return (
		<Fragment>
			<Router history={history}>
				<Header />
				<MainContextProvider>
					<Switch>
						<Route path="/" exact component={(props) => <Main {...props} />} />
						<Route
							path="/admin"
							exact
							component={(props) => <Main {...props} />}
						/>
						<Route path="/posts" component={(props) => <Main {...props} />} />
						<Route
							component={(props) => (
								<div className="content all-cesssssntered container">404</div>
							)}
						/>
					</Switch>
					{/* <Main /> */}
				</MainContextProvider>
				<Footer />
			</Router>
		</Fragment>
	);
};

export default App;

import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";

import MainContextProvider from "../contexts/MainContext.jsx";

import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Main from "./layout/Main.jsx";

import "./app.css";

const App = () => {
	return (
		<Fragment>
			<Router history={history}>
				<Header />
				<MainContextProvider>
					<Main />
				</MainContextProvider>
				<Footer />
			</Router>
		</Fragment>
	);
};

export default App;

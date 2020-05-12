import React, { Fragment } from "react";
import { Router } from "react-router-dom";
import { history } from "./history";

import PostContextProvider from "../contexts/PostContext.jsx";
import QuestionContextProvider from "../contexts/QuestionContext.jsx";
import EventContextProvider from "../contexts/EventContext.jsx";

import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Main from "./layout/Main.jsx";

import "./app.css";

const App = () => {
	return (
		<Fragment>
			<Router history={history}>
				<Header />
				<PostContextProvider>
					<QuestionContextProvider>
						<EventContextProvider>
							<Main />
						</EventContextProvider>
					</QuestionContextProvider>
				</PostContextProvider>
				<Footer />
			</Router>
		</Fragment>
	);
};

export default App;

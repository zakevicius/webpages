import React, { useEffect, useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext.jsx";
import { QuestionContext } from "../../contexts/QuestionContext.jsx";
import { EventContext } from "../../contexts/EventContext.jsx";
import { history } from "../history";
import api from "../api/api.js";
import PrivateRoute from "../../PrivateRoute.jsx";
import {
	FETCH_POSTS,
	SET_LOADING,
	REFRESH_PAGE,
	FETCH_QUESTIONS,
} from "../../reducers/types.js";

import Content from "./Content.jsx";
import Aside from "./Aside.jsx";
import TabList from "./TabList.jsx";
import HomeLink from "../elements/HomeLink.jsx";

const Main = () => {
	const [page, setPage] = useState({ cat: "all" });

	const { state: postState, dispatch: postDispatch } = useContext(PostContext);
	const { state: questionState, dispatch: questionDispatch } = useContext(
		QuestionContext
	);
	const { state: eventState, dispatch: eventDispatch } = useContext(
		EventContext
	);

	useEffect(() => {
		eventDispatch({ type: REFRESH_PAGE, payload: false });

		try {
			eventDispatch({ type: SET_LOADING, payload: true });

			const postsPromise = api.get("http://localhost:8080/posts");
			const questionsPromise = api.get("http://localhost:8080/questions");

			Promise.all([postsPromise, questionsPromise])
				.then(([posts, questions]) => {
					postDispatch({ type: FETCH_POSTS, payload: posts.data });
					questionDispatch({ type: FETCH_QUESTIONS, payload: questions.data });
				})
				.finally(() => eventDispatch({ type: SET_LOADING, payload: false }));
		} catch (err) {
			console.log(err);
		}
	}, [eventState.refreshPage]);

	const handleOnTabClick = (tab) => {
		setPage({ ...page, ...tab });
	};

	const handleOnHomeClick = () => {
		setPage({ cat: "all" });
		window.scrollTo(0, 0);
		eventDispatch({ type: REFRESH_PAGE, payload: true });
		history.push("/");
	};

	return (
		<>
			<HomeLink handleOnClick={handleOnHomeClick} />
			<TabList handleOnClick={handleOnTabClick} page={page} />
			<Aside side="left" />
			<Switch>
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
			</Switch>
			<Aside side="right" />
		</>
	);
};

export default Main;

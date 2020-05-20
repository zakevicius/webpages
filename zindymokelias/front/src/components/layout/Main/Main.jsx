import React, { useEffect, useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { history } from "../../history";
import api from "../../api/api.js";

import PrivateRoute from "../../../PrivateRoute.jsx";
import { MainContext } from "../../../contexts/MainContext.jsx";
import {
	FETCH_POSTS,
	SET_LOADING,
	REFRESH_PAGE,
	FETCH_QUESTIONS,
} from "../../../reducers/types.js";

import Content from "../Content/Content.jsx";
import Aside from "../Aside/Aside.jsx";
import TabList from "../Navbar/TabList.jsx";

const Main = () => {
	const [page, setPage] = useState({ cat: "all" });

	const { state, dispatch } = useContext(MainContext);

	useEffect(() => {
		dispatch({ type: REFRESH_PAGE, payload: false });

		try {
			dispatch({ type: SET_LOADING, payload: true });

			const postsPromise = api.get("/posts");
			const questionsPromise = api.get("/questions");

			Promise.all([postsPromise, questionsPromise])
				.then(([posts, questions]) => {
					dispatch({ type: FETCH_POSTS, payload: posts.data });
					dispatch({ type: FETCH_QUESTIONS, payload: questions.data });
				})
				.finally(() => dispatch({ type: SET_LOADING, payload: false }));
		} catch (err) {
			console.log(err);
		}
	}, [state.refreshPage]);

	const handleOnTabClick = (tab) => {
		setPage({ ...page, ...tab });
	};

	const handleOnHomeClick = () => {
		setPage({ cat: "all" });
		window.scrollTo(0, 0);
		dispatch({ type: REFRESH_PAGE, payload: true });
		history.push("/");
	};

	return (
		<>
			<TabList
				handleOnClick={handleOnTabClick}
				handleOnHomeClick={handleOnHomeClick}
				page={page}
			/>
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
				<Route
					path="/posts/:id"
					exact
					component={(props) => {
						return (
							// <Redirect
							// 	to={{
							// 		pathname: "/",
							// 		redirectURL: props.location.pathname,
							// 	}}
							// />
							<Content page="post" post={props.match.params.id} {...props} />
						);
					}}
				/>
				<Route
					component={(props) => <div className="content container">404</div>}
				/>
			</Switch>
			<Aside side="right" />
		</>
	);
};

export default Main;

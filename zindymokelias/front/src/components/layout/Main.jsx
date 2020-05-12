import React, { useEffect, useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext.jsx";
import { history } from "../history";
import api from "../api/api.js";
import PrivateRoute from "../../PrivateRoute.jsx";
import {
	FETCH_POSTS,
	SET_LOADING,
	UNSET_LOADING,
	REFRESH_PAGE,
} from "../../reducers/types.js";

import Content from "./Content.jsx";
import Aside from "./Aside.jsx";
import TabList from "./TabList.jsx";
import HomeLink from "../elements/HomeLink.jsx";

const Main = () => {
	const [page, setPage] = useState({ cat: "all" });

	const { state, dispatch } = useContext(PostContext);

	useEffect(() => {
		dispatch({ type: REFRESH_PAGE, payload: false });

		try {
			dispatch({ type: SET_LOADING });
			api
				.get("http://localhost:8080/posts")
				.then((res) => {
					dispatch({ type: FETCH_POSTS, payload: res.data });
				})
				.finally(() => dispatch({ type: UNSET_LOADING }));
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

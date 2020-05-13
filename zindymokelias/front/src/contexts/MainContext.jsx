import React, { createContext, useReducer } from "react";
import { postReducer } from "../reducers/postReducer";
import { questionReducer } from "../reducers/questionReducer";
import { eventReducer } from "../reducers/eventReducer";
import { postState, questionState, eventState } from "./initialState";

export const MainContext = createContext();

const MainContextProvider = (props) => {
	const reducers = [
		useReducer(postReducer, postState),
		useReducer(questionReducer, questionState),
		useReducer(eventReducer, eventState),
	];

	let state = {};
	const dispatch = [];

	reducers.forEach((reducer) => {
		state = { ...state, ...reducer[0] };
		dispatch.push(reducer[1]);
	});

	const mainDispatch = (action) => {
		dispatch.forEach((func) => {
			func(action);
		});
	};

	return (
		<MainContext.Provider value={{ state: state, dispatch: mainDispatch }}>
			{props.children}
		</MainContext.Provider>
	);
};

export default MainContextProvider;

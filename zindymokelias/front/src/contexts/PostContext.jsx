import React, { createContext, useReducer, useEffect } from "react";
import { postReducer } from "../reducers/postReducer";

export const PostContext = createContext();

const initialState = {
	posts: [],
	loading: false,
	refresh: false,
};

const PostContextProvider = (props) => {
	const [state, dispatch] = useReducer(postReducer, initialState);

	return (
		<PostContext.Provider value={{ state: { ...state }, dispatch }}>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostContextProvider;

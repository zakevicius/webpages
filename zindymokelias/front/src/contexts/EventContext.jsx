import React, { createContext, useReducer } from "react";
import { eventReducer } from "../reducers/eventReducer";

export const EventContext = createContext();

const initialState = {
	loading: false,
	refreshPage: false,
};

const EventContextProvider = (props) => {
	const [state, dispatch] = useReducer(eventReducer, initialState);

	return (
		<EventContext.Provider value={{ state, dispatch }}>
			{props.children}
		</EventContext.Provider>
	);
};

export default EventContextProvider;

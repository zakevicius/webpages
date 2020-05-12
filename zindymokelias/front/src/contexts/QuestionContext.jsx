import React, { useReducer, createContext } from "react";
import { questionReducer } from "../reducers/questionReducer";

export const QuestionContext = createContext();

const initialState = {
	questions: [],
};

const QuestionContextProvider = (props) => {
	const [state, dispatch] = useReducer(questionReducer, initialState);

	return (
		<QuestionContext.Provider value={{ state, dispatch }}>
			{props.children}
		</QuestionContext.Provider>
	);
};

export default QuestionContextProvider;

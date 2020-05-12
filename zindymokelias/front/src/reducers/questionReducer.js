import { FETCH_QUESTIONS, ADD_QUESTION } from "./types";

export const questionReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case FETCH_QUESTIONS:
			return { ...state, questions: [...action.payload] };
		case ADD_QUESTION:
			return { ...state, questions: [...state.questions, action.payload] };
		default:
			return state;
	}
};

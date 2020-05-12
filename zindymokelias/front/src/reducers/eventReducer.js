import { SET_LOADING, REFRESH_PAGE } from "./types";

export const eventReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case REFRESH_PAGE:
			return { ...state, refreshPage: action.payload };
		default:
			return state;
	}
};

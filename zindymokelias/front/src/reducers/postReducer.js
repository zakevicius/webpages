import { FETCH_POSTS, ADD_POST } from "./types";

export const postReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case FETCH_POSTS:
			return action.payload.posts;
		case ADD_POST:
			return [...state, action.payload];
		default:
			return state;
	}
};

import {
	FETCH_POSTS,
	ADD_POST,
	SET_LOADING,
	UNSET_LOADING,
	REFRESH_PAGE,
} from "./types";

export const postReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, posts: [...action.payload.posts] };
		case ADD_POST:
			return { ...state, posts: [...state.posts, action.payload] };
		case SET_LOADING:
			return { ...state, loading: true };
		case UNSET_LOADING:
			return { ...state, loading: false };
		case REFRESH_PAGE:
			return { ...state, refreshPage: action.payload };
		default:
			return state;
	}
};

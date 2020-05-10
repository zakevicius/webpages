import React, { useEffect, useContext, useReducer } from "react";
import Post from "./Post.jsx";
import { PostContext } from "../../contexts/PostContext.jsx";
import { FETCH_POSTS } from "../../reducers/types.js";
import api from "../api/api.js";

const PostList = ({ cat, subCat }) => {
	const { posts, dispatch } = useContext(PostContext);

	useEffect(() => {
		try {
			api.get("http://localhost:8080/posts", { cat, subCat }).then((res) => {
				dispatch({ type: FETCH_POSTS, payload: res.data });
			});
		} catch (err) {
			console.log(err);
		}
	}, [posts.length]);

	const renderPosts = () => {
		const postsToRender = posts.filter((post) => {
			if (!cat && !subCat) return post;
			if (subCat) {
				return post.subCat === subCat;
			} else {
				return post.cat === cat;
			}
		});

		if (postsToRender.length > 0) {
			return postsToRender.map((post) => <Post key={post._id} post={post} />);
		} else {
			return "No posts";
		}
	};

	return <div>{renderPosts()}</div>;
};

export default PostList;

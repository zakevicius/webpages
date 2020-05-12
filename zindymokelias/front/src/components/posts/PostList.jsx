import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../../contexts/PostContext.jsx";

import Post from "./Post.jsx";

const PostList = ({ cat, subCat, posts, loading }) => {
	useEffect(() => {}, [posts.length]);

	const { state, dispatch } = useContext(PostContext);

	const renderPosts = () => {
		if (loading) return "Loading";
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

import React, { useEffect, useContext, useState } from "react";
import "./postList.css";

import Post from "./Post.jsx";

const PostList = ({ cat, subCat, posts, loading }) => {
	useEffect(() => {}, [posts.length]);

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
			return postsToRender.map((post, i) => (
				<Post index={i} key={post._id} post={post} />
			));
		} else {
			return "No posts";
		}
	};

	return <div className="post-list width">{renderPosts()}</div>;
};

export default PostList;

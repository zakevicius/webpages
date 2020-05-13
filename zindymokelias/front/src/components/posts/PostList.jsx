import React, { useEffect, useContext, useState } from "react";
import "./postList.css";

import Post from "./Post.jsx";
import Divider from "../elements/Divider.jsx";

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
			const data = [];

			postsToRender.forEach((post, i) => {
				data.push(<Post index={i} key={post._id} post={post} />);
				if (i !== postsToRender.length - 1)
					data.push(<Divider key={post._id + "d"} />);
			});

			return data.map((el) => el);
		} else {
			return "No posts";
		}
	};

	return <div className="post-list section width">{renderPosts()}</div>;
};

export default PostList;

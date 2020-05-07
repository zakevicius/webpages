import React, { useEffect } from "react";
import Post from "./Post.jsx";
import posts from "../json/posts.json";

const PostList = ({ cat, subCat }) => {
	const renderPosts = () => {
		const postsToRender = posts.filter((post) => {
			if (!cat && !subCat) return "No posts found";
			console.log(post.subCat, subCat);
			if (subCat) {
				return post.subCat === subCat;
			} else if (cat === "all") {
				return true;
			} else {
				return post.cat === cat;
			}
		});
		return postsToRender.map((post) => <Post key={post.id} post={post} />);
	};

	return <div>{renderPosts()}</div>;
};

export default PostList;

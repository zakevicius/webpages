import React from "react";
import Post from "./Post.jsx";

const PostList = ({ cat }) => {
	return (
		<div>
			<h3>Naujausi postai</h3>
			<p>{cat}</p>
		</div>
	);
};

export default PostList;

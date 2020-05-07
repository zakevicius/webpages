import React from "react";
import Button from "../elements/Button.jsx";

const Post = ({ post }) => {
	return (
		<div>
			<h2>{post.title}</h2>
			<h3>{post.intro}</h3>
			<p>{post.content}</p>
		</div>
	);
};

export default Post;

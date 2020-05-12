import React, { useEffect, useRef } from "react";
import Button from "../elements/Button.jsx";
import "./post.css";

const Post = ({ post }) => {
	const imageRef = useRef();

	useEffect(() => {}, [post._id]);

	return (
		<div className="post flex wrap">
			<div className="post-header">
				<img
					ref={imageRef}
					className="post-image"
					alt={post.title}
					src={`data:image/jpeg;base64,${post.image}`}
				/>
				<h2>{post.title}</h2>
				{post.cat && post.cat}
				{post.subCat && post.subCat}
				<div className="post-intro">{post.intro}</div>
				<Button text="Daugiau..." />
			</div>
			<div className="post-content">{post.content}</div>
		</div>
	);
};

export default Post;

import React, { useEffect, useRef } from "react";
import Button from "../elements/Button.jsx";
import "./post.css";

const Post = ({ post, index, full }) => {
	useEffect(() => {}, [post._id]);

	return (
		<div className="post flex wrap">
			<div
				className="post-top flex"
				style={{ flexDirection: `${index % 2 ? "row-reverse" : "row"}` }}
			>
				<img
					className="post-image"
					alt={post.title}
					src={`data:image/jpeg;base64,${post.image}`}
				/>
				<div className="post-header flex wrap">
					<h2>{post.title}</h2>
					{post.cat && post.cat}
					{post.subCat && post.subCat}
					<div className="post-intro">{post.intro}</div>
					<Button text="Daugiau..." />
				</div>
			</div>
			{full ? <div className="post-bottom">{post.content}</div> : null}
		</div>
	);
};

export default Post;

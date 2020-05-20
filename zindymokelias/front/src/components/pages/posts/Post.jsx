import React, { useEffect, useRef } from "react";
import Button from "../../elements/Button.jsx";
import "./post.css";
import { Link } from "react-router-dom";
import Divider from "../../elements/Divider.jsx";

const Post = ({ post, index = 0, full }) => {
	if (!post) return "No post found";

	useEffect(() => {
		if (full) window.scrollTo(0, 450);
	}, [post._id]);

	const renderContent = () => {
		const paragraphs = post.content.split("---------");

		return paragraphs.map((text, i) => <p key={i}>{text}</p>);
	};

	return (
		<div className={`post flex wrap ${full ? "full" : ""}`}>
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
					<h1>{post.title}</h1>
					{post.date.split("T")[0]}
					{post.cat && post.cat}
					{post.subCat && post.subCat}
					<h4 className="post-intro">{post.intro}</h4>
					{full ? null : (
						<Link to={`/posts/${post._id}`}>
							<Button text="Daugiau..." type="warning" />
						</Link>
					)}
				</div>
			</div>
			{full ? <Divider /> : null}
			{full ? <div className="post-bottom">{renderContent()}</div> : null}
		</div>
	);
};

export default Post;

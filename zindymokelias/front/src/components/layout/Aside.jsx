import React, { useEffect, useContext } from "react";
import { PostContext } from "../../contexts/PostContext.jsx";
import "./aside.css";

const Aside = ({ side }) => {
	const { state, dispatch } = useContext(PostContext);

	const renderLeftContent = () => {
		return "LEFT";
	};

	const renderRightContent = () => {
		return (
			<div>
				New posts:
				<ul>
					{state.posts.map((post) => (
						<li key={post._id}>{post.title}</li>
					))}
				</ul>
			</div>
		);
	};

	const renderContent = () => {
		switch (side) {
			case "left":
				return renderLeftContent();
			case "right":
				return renderRightContent();
			default:
				return null;
		}
	};

	return <aside className={`content-side ${side}`}>{renderContent()}</aside>;
};

export default Aside;

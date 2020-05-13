import React, { useEffect, useContext } from "react";
import { MainContext } from "../../contexts/MainContext.jsx";
import "./aside.css";

const Aside = ({ side }) => {
	const { state, dispatch } = useContext(MainContext);

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

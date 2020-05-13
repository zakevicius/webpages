import React, { useEffect, useContext, useRef } from "react";
import { MainContext } from "../../contexts/MainContext.jsx";
import "./aside.css";

const Aside = ({ side }) => {
	const { state, dispatch } = useContext(MainContext);
	const asideRef = useRef();

	const valueForRender = state.posts[0] ? state.posts[0].id : "";

	useEffect(() => {
		document.addEventListener("scroll", repositionAside);
		return () => {
			document.removeEventListener("scroll", repositionAside);
		};
	}, [valueForRender]);

	const repositionAside = () => {
		if (window.pageYOffset > 350) {
			asideRef.current.style.top = -350 + 16 + "px";
		} else {
			asideRef.current.style.top = -window.pageYOffset + "px";
		}
	};

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

	return (
		<aside ref={asideRef} className={side}>
			{renderContent()}
		</aside>
	);
};

export default Aside;

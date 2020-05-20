import React, { useEffect, useContext, useRef } from "react";
import { MainContext } from "../../../contexts/MainContext.jsx";
import "./aside.css";
import { Link } from "react-router-dom";

import About from "../../pages/about/About.jsx";
import FormAside from "./FormAside.jsx";

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
		console.log(
			window.pageYOffset + window.innerHeight - 75,
			document.querySelector("footer").offsetTop
		);
		if (window.pageYOffset >= 450) {
			asideRef.current.style.top = -500 + "px";
		} else {
			asideRef.current.style.top = -window.pageYOffset + "px";
		}

		if (
			window.pageYOffset + window.innerHeight >
			document.querySelector("footer").offsetTop
		) {
			asideRef.current.style.bottom = "5em";
		} else {
			asideRef.current.style.bottom = "0em";
		}
	};

	const renderLeftContent = () => {
		return <About />;
	};

	const renderRightContent = () => {
		let newPosts = [];

		if (state.posts.length > 5) {
			for (let i = 0; i < 5; i++) {
				newPosts[i] = state.posts[i];
			}
		} else {
			newPosts = [...state.posts];
		}

		return (
			<div>
				<h2>Naujausi įrašai</h2>
				<ul>
					{newPosts.map((post) => (
						<Link key={post._id} to={`/posts/${post._id}`}>
							<li>
								<h4>{post.title}</h4>
								<div>{post.date.split("T")[0]}</div>
							</li>
						</Link>
					))}
				</ul>
				<div className="section form-aside-cont">
					Turi klausimų? Parašyk:
					<FormAside />
				</div>
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
		<aside ref={asideRef} className={`${side} middle-X flex wrap`}>
			{renderContent()}
		</aside>
	);
};

export default Aside;

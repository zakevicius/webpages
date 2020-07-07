import React, { useEffect, useContext, useRef } from "react";
import { MainContext } from "../../../contexts/MainContext.jsx";
import "./aside.css";
import { Link } from "react-router-dom";

import About from "../../pages/about/About.jsx";
import FormAside from "./FormAside.jsx";

const Aside = ({ side }) => {
	const { state, dispatch } = useContext(MainContext);
	const asideRef = useRef();
	let lastScrollPos = 0;
	let scrollDir = "";

	const valueForRender = state.posts[0] ? state.posts[0].id : "";

	useEffect(() => {
		document.addEventListener("scroll", repositionAside);
		return () => {
			document.removeEventListener("scroll", repositionAside);
		};
	}, [valueForRender]);

	const repositionAside = () => {
		// Getting scroll direction
		let newScrollPos = window.pageYOffset;

		if (lastScrollPos > newScrollPos) {
			scrollDir = "up";
		} else {
			scrollDir = "down";
		}

		// let asideTop = asideRef.current.style.top;
		let asideOff = asideRef.current.offsetHeight;
		let windowH = window.innerHeight;
		let windowOff = window.pageYOffset;

		let hidden = 0;

		if (asideOff > windowH) hidden = asideOff - windowH;

		// Setting aside fixed to page top or bottom

		if (asideRef.current.style.clientHeight < windowH) return;

		switch (scrollDir) {
			case "down":
				console.log("down");
				break;
			case "up":
				console.log("up");
				break;
		}

		if (windowOff > 450 + hidden) {
			asideRef.current.style.top = -hidden + "px";
		} else {
			asideRef.current.style.top = -newScrollPos + 500 + "px";
		}

		// giving footer some space by shrinking aside component
		if (windowOff + windowH > document.querySelector("footer").offsetTop) {
			asideRef.current.style.top =
				asideRef.current.style.top.split("px")[0] - 75 + "px";
			// asideRef.current.style.bottom = "50px";
		} else {
			asideRef.current.style.bottom = "unset";
		}

		lastScrollPos = newScrollPos;
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

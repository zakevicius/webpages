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

		// Setting aside fixed to page top or bottom
		if (windowOff <= 450 + asideOff - windowH) {
			asideRef.current.style.top = -windowOff + 500 + "px";
		} else {
			if (scrollDir === "down") {
				if (asideRef.current.style.top.split("px")[0] > asideOff - windowH) {
					asideRef.current.style.top =
						+asideRef.current.style.top.split("px")[0] -
						lastScrollPos -
						newScrollPos +
						"px";
				} else {
					asideRef.current.style.top = -asideOff + windowH + "px";
				}
			} else {
				if (
					scrollDir === "up" &&
					+asideRef.current.style.top.split("px")[0] < 0
				) {
					console.log(
						asideRef.current.style.top.split("px")[0],
						lastScrollPos - newScrollPos
					);

					asideRef.current.style.top =
						+asideRef.current.style.top.split("px")[0] +
						lastScrollPos -
						newScrollPos +
						"px";
				} else {
					asideRef.current.style.top = 0 + "px";
				}
			}
		}
		// }
		// else if (
		// 	window.pageYOffset >= 450 + window.innerHeight &&
		// 	scrollDir === "up"
		// ) {
		// 	asideRef.current.style.top = 0 + "px";
		// } else {
		// 	asideRef.current.style.top = -window.pageYOffset + 500 + "px";
		// }

		// scrolling aside elements if there is content overflow
		// if (
		// 	asideRef.current.offsetHeight > window.innerHeight &&
		// 	window.pageYOffset >= 450
		// ) {
		// 	asideRef.current.style.top = -window.pageYOffset + "px";
		// 	console.log(asideRef.current.offsetHeight - window.innerHeight);
		// 	console.log(
		// 		window.innerHeight + window.pageYOffset >
		// 			asideRef.current.offsetHeight -
		// 				asideRef.current.offsetHeight -
		// 				window.innerHeight
		// 	);
		// 	// asideRef.current.style.top = -window.pageYOffset + "px";
		// }

		// giving footer some space by shrinking aside component
		if (
			window.pageYOffset + window.innerHeight >
			document.querySelector("footer").offsetTop
		) {
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
			{renderContent()}
		</aside>
	);
};

export default Aside;

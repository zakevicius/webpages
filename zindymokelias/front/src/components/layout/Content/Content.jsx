import React, { useContext, useEffect } from "react";
import PostList from "../../pages/posts/PostList.jsx";
import About from "../../pages/about/About.jsx";
import PostForm from "../../pages/admin/Admin.jsx";
import { MainContext } from "../../../contexts/MainContext.jsx";

import "./content.css";
import tabs from "../../json/tabs.json";
import QuestionList from "../../pages/questions/QuestionList.jsx";
import PostPage from "../../pages/posts/PostPage.jsx";
import { history } from "../../history.js";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;

const subTabs = [];

secondaryTabs.forEach((group) => {
	group.forEach((el) => subTabs.push(el));
});

const Content = ({ page, post, ...props }) => {
	const { state, dispatch } = useContext(MainContext);
	const { posts, questions, loading } = state;

	const setHeight = () => {
		const content = document.querySelector(".content");

		if (content) {
			// console.log(content.style.minHeight);
			// content.style.minHeight =
			// 	document.querySelector("aside").style.height + "px";
		}
	};

	const renderContent = () => {
		if (page === "post") return <PostPage id={post} />;
		if (page === "admin") return <PostForm />;

		if (page.cat === "all") return <PostList posts={posts} loading={loading} />;
		if (page.cat === "questions")
			return <QuestionList questions={questions} loading={loading} />;
		if (page.cat === "about") return <About />;
		if (page.type !== "primary") {
			for (let tab of primaryTabs) {
				if (tab.cat === page.cat) {
					return (
						<PostList
							posts={posts}
							cat={page.cat}
							subCat={page.subCat}
							loading={loading}
						/>
					);
				}
			}
		} else {
			return <PostList posts={posts} cat={page.cat} loading={loading} />;
		}
	};

	return (
		<div className="container flex width middle-X content">
			{renderContent()}
		</div>
	);
};

export default Content;

import React, { useContext } from "react";
import PostList from "../posts/PostList.jsx";
import About from "../about/About.jsx";
import PostForm from "../pages/admin/PostForm.jsx";
import { PostContext } from "../../contexts/PostContext.jsx";

import "./content.css";
import tabs from "../json/tabs.json";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;

const subTabs = [];

secondaryTabs.forEach((group) => {
	group.forEach((el) => subTabs.push(el));
});

const Content = ({ page }) => {
	const { state, dispatch } = useContext(PostContext);
	const { posts, loading } = state;

	const renderContent = () => {
		if (page === "admin") return <PostForm />;
		if (page.cat === "all") return <PostList posts={posts} loading={loading} />;
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

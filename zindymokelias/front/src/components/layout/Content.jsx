import React, { useEffect } from "react";
import { history } from "../history";
import PostList from "../posts/PostList.jsx";
import About from "../about/About.jsx";
import PostForm from "../pages/admin/PostForm.jsx";

import "./content.css";
import tabs from "../json/tabs.json";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;

const subTabs = [];

secondaryTabs.forEach((group) => {
	group.forEach((el) => subTabs.push(el));
});

const Content = ({ page, ...props }) => {
	useEffect(() => {
		if (location.redirectURL) history.push(props.location.redirectURL);
	});

	const renderContent = () => {
		if (page === "admin") return <PostForm />;
		if (page.cat === "all") return <PostList />;
		if (page.cat === "about") return <About />;
		if (page.type !== "primary") {
			for (let tab of primaryTabs) {
				if (tab.cat === page.cat) {
					return <PostList cat={page.cat} subCat={page.subCat} />;
				}
			}
		} else {
			return <PostList cat={page.cat} />;
		}
	};

	return (
		<div className="container flex width middle-X content wrap">
			{renderContent()}
		</div>
	);
};

export default Content;

import React, { useEffect } from "react";
import PostList from "../posts/PostList.jsx";
import About from "../about/About.jsx";
import "./content.css";
import tabs from "../json/tabs.json";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;
const [FEEDING, VIDEOS, QUESTIONS, ABOUT] = primaryTabs;
const [SEC1, SEC2, SEC3, SEC4] = secondaryTabs[0];
const [SEC5, SEC6, SEC7, SEC8] = secondaryTabs[2];

const subTabs = [];

secondaryTabs.forEach((group) => {
	group.forEach((el) => subTabs.push(el));
});

console.log(subTabs);

const Content = ({ page, subPage, cat, subCat }) => {
	const renderContent = () => {
		if (subPage) {
			for (let tab of subTabs) {
				if (tab.subCat === subCat && tab.cat === cat) {
					return <PostList subCat={tab.subCat} />;
				}
			}
		} else if (page) {
			for (let tab of primaryTabs) {
				if (tab.cat === cat) {
					return <PostList cat={tab.cat} />;
				}
			}
		} else {
			return <PostList cat="all" />;
		}
		// switch (subPage) {
		// 	case SEC1.text:
		// 		return <PostList subCat={SEC1.subCat} />;
		// 	case SEC2.text:
		// 		return <PostList subCat={SEC2.subCat} />;
		// 	case SEC3.text:
		// 		return <PostList subCat={SEC3.subCat} />;
		// 	case SEC4.text:
		// 		return <PostList subCat={SEC4.subCat} />;
		// 	default:
		// 		return <PostList cat="all" />;
		// }
	};

	return (
		<div className="container flex width middle-X content wrap">
			{renderContent()}
		</div>
	);
};

export default Content;

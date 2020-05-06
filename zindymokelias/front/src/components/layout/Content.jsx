import React, { useEffect } from "react";
import PostList from "../posts/PostList.jsx";
import About from "../about/About.jsx";
import "./content.css";
import tabs from "../json/tabs.json";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;
const [FEEDING, VIDEOS, QUESTIONS, ABOUT] = primaryTabs;
const [SEC1, SEC2, SEC3, SEC4] = secondaryTabs[0];

const Content = ({ page, subPage }) => {
	const renderContent = () => {
		console.log(page);
		switch (page) {
			case VIDEOS.text:
				return <PostList cat={VIDEOS.cat} />;
			case QUESTIONS.text:
				return <PostList cat={QUESTIONS.cat} />;
			case ABOUT.text:
				return <About />;
			default:
				switch (subPage) {
					case SEC1.text:
						return <PostList cat={SEC1.cat} />;
					case SEC2.text:
						return <PostList cat={SEC2.cat} />;
					case SEC3.text:
						return <PostList cat={SEC3.cat} />;
					case SEC4.text:
						return <PostList cat={SEC4.cat} />;
					default:
						return <PostList cat="all" />;
				}
		}
	};

	return (
		<div className="container flex width middle-X content wrap">
			{renderContent()}
		</div>
	);
};

export default Content;

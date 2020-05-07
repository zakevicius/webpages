import React, { useRef, useState } from "react";
import "./tabList.css";
import Tab from "./Tab.jsx";
import tabs from "../json/tabs.json";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;

const TabList = (props) => {
	const [tabExpanded, setTabExpanded] = useState(-1);
	const [tabIndex, setTabIndex] = useState(-1);
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (tabText, type, tabData) => {
		if (type === "primary") {
			const index = primaryTabs.findIndex((tab) => tab.text === tabText);

			if (tabExpanded && tabIndex === index) {
				shrink();
			} else {
				if (secondaryTabs[index].length > 0) {
					expand();
				} else {
					shrink();
				}
			}

			setActiveTab(index);
			setTabIndex(index);
		} else {
			shrink();
		}
		props.handleOnClick(tabText, type, tabData);
	};

	const shrink = () => {
		document.querySelector(".content").style.top = "-50px";
		setTabExpanded(false);
	};

	const expand = () => {
		document.querySelector(".content").style.top = "0px";
		setTabExpanded(true);
	};

	return (
		<div className={`tab-div flex all-centered wrap width`}>
			<div className={`tab-list flex all-centered primary`}>
				{primaryTabs.map((tab) => (
					<Tab
						key={tab.id}
						data={tab}
						type="primary"
						handleTabClick={handleTabClick}
					/>
				))}
			</div>
			<div className={`tab-list flex all-centered secondary`}>
				{secondaryTabs[activeTab].map((tab) => (
					<Tab
						key={tab.id}
						data={tab}
						type="secondary"
						handleTabClick={handleTabClick}
					/>
				))}
			</div>
		</div>
	);
};

export default TabList;

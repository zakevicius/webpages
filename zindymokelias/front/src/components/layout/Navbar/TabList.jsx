import React, { useRef, useState, useEffect } from "react";
import "./tabList.css";
import Tab from "./Tab.jsx";
import tabs from "../../json/tabs.json";

import HomeLink from "../../elements/HomeLink.jsx";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;
const TAB_TIMEOUT = 200;

const TabList = ({ handleOnClick, handleOnHomeClick, page, ...props }) => {
	const [tabStatus, setTabStatus] = useState("shrinked");
	const [activeTab, setActiveTab] = useState(0);
	const subRef = useRef();

	useEffect(() => {
		if (page.cat === "all" || tabStatus === "expanded") {
			handleTabExpand("shrink");
		}
		document.addEventListener("scroll", function () {
			if (subRef.current && tabStatus !== "shrinked") {
				handleTabExpand("shrink");
			}
		});
	}, [page.cat]);

	const handleTabClick = (tabData) => {
		if (tabStatus === "changing") return;

		let newTab = activeTab;
		newTab = primaryTabs.findIndex((tab) => tab.text === tabData.text);

		// if (
		// 	primaryTabs[activeTab].text !== primaryTabs[newTab].text &&
		// 	tabStatus === "expanded"
		// ) {

		if (tabData.type === "primary") {
			if (primaryTabs[newTab].subCat) {
				if (primaryTabs[activeTab].text !== primaryTabs[newTab].text) {
					switch (tabStatus) {
						case "expanded":
							handleTabExpand("switch", newTab);
							break;
						case "shrinked":
							handleTabExpand("expand", newTab);
					}
				} else {
					switch (tabStatus) {
						case "expanded":
							handleTabExpand("shrink", newTab);
							break;
						case "shrinked":
							handleTabExpand("expand", newTab);
					}
				}
			}
		}

		handleOnClick(tabData);
	};

	const handleTabExpand = (action, newTab) => {
		switch (action) {
			case "switch":
				if (tabStatus === "expanded") {
					shrink();
					setTimeout(() => {
						setActiveTab(newTab);
						expand();
					}, TAB_TIMEOUT);
				} else {
					setActiveTab(newTab);
					expand();
				}
				break;
			case "shrink":
				shrink();
				break;
			case "expand":
				setActiveTab(newTab);
				expand();
				break;
			default:
				break;
		}
	};

	const shrink = () => {
		setTabStatus("changing");
		subRef.current.style.top = "0px";
		setTimeout(() => {
			setTabStatus("shrinked");
		}, TAB_TIMEOUT);
	};

	const expand = () => {
		setTabStatus("changing");
		subRef.current.style.top = "50px";
		setTimeout(() => {
			setTabStatus("expanded");
		}, TAB_TIMEOUT);
	};

	return (
		<div className={`tab-div flex all-centered wrap `}>
			<div className={`tab-list flex width primary`}>
				<HomeLink handleOnClick={handleOnHomeClick} />
				{primaryTabs.map((tab) => (
					<Tab
						key={tab.id}
						data={tab}
						icon={tab.subCat ? "show-icon" : ""}
						type="primary"
						handleTabClick={handleTabClick}
						tabStatus={tabStatus}
					/>
				))}
			</div>
			<div ref={subRef} className={`tab-list width flex secondary`}>
				{secondaryTabs[activeTab].map((tab, i) => (
					<Tab
						key={tab.id ? tab.id : i}
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

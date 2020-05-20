import React, { useRef, useState, useEffect } from "react";
import "./tabList.css";
import Tab from "./Tab.jsx";
import tabs from "../../json/tabs.json";

import HomeLink from "../../elements/HomeLink.jsx";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;
const TAB_TIMEOUT = 200;

const TabList = ({ handleOnClick, handleOnHomeClick, page }) => {
	const [tabStatus, setTabStatus] = useState("shrinked");
	const [activeTab, setActiveTab] = useState(0);
	const subRef = useRef();

	useEffect(() => {
		if (page.cat === "all" || tabStatus === "expanded") {
			console.log(tabStatus);
			handleTabExpand("shrink");
		}
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
		console.log(action);
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
		subRef.current.style.left = "50px";
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

// const handleTabClick = (tabData) => {
// 	if (tabData.type === "primary") {
// 		let newTab = activeTab;
// 		newTab = primaryTabs.findIndex((tab) => tab.text === tabData.text);

// 		if (tabStatus === "expanded" || tabStatus === "shrinked") {
// 			console.log(tabStatus);
// 			if (
// 				primaryTabs[activeTab] !== primaryTabs[newTab] &&
// 				primaryTabs[newTab].subCat &&
// 				(tabStatus === "expanded" || tabStatus === "expanding")
// 			) {
// 				shrink();
// 				setTimeout(() => {
// 					setActiveTab(newTab);
// 					expand();
// 				}, 500);
// 			} else if (tabStatus === "expanded" || tabStatus === "expanding") {
// 				shrink();
// 				setTimeout(() => {
// 					setActiveTab(newTab);
// 				}, Math.max(secondaryTabs[newTab].length * TAB_TIMEOUT + TAB_TIMEOUT, 500));
// 			} else if (
// 				secondaryTabs[newTab].length > 0 &&
// 				tabStatus === "shrinked"
// 			) {
// 				expand();
// 				setActiveTab(newTab);
// 			}
// 			handleOnClick(tabData);
// 		} else if (!primaryTabs[newTab].subCat) {
// 			shrink();
// 		}
// 	} else {
// 		handleOnClick(tabData);
// 	}
// 	// if (tabData.subCat === false && tabStatus !== "shrinked") {
// 	//   shrink();
// 	//   return;
// 	// }
// };

// const shrink = () => {
// 	document.querySelector(".tab-list.secondary").style.top = "0px";
// 	const tabs = document.querySelectorAll(".tab.secondary");
// 	setTabStatus("shrinking");

// 	if (!tabs.length) {
// 		if (tabStatus === "shrinking") {
// 			setTabStatus("shrinked");
// 		} else {
// 			setTabStatus("expanded");
// 		}
// 	}

// 	for (let i = tabs.length - 1; i >= 0; i--) {
// 		tabs[i].style.top = "-50px";
// 		setTimeout(() => {
// 			tabs[i].style.top = "0px";
// 			tabs[i].style.opacity = 0;
// 			if (i === 0) {
// 				setTimeout(() => {
// 					setTabStatus("shrinked");
// 				}, TAB_TIMEOUT * tabs.length);
// 			}
// 		}, TAB_TIMEOUT * (tabs.length - i));
// 	}
// };

// const expand = () => {
// 	document.querySelector(".tab-list.secondary").style.top = "-50px";
// 	const tabs = document.querySelectorAll(".tab.secondary");
// 	setTabStatus("expanding");

// 	if (!tabs.length) {
// 		if (tabStatus === "expanding") {
// 			setTabStatus("expanded");
// 		} else {
// 			setTabStatus("shrinked");
// 		}
// 		return;
// 	}

// 	for (let i = 0; i < tabs.length; i++) {
// 		tabs[i].style.top = "50px";
// 		setTimeout(() => {
// 			tabs[i].style.top = "0px";
// 			tabs[i].style.opacity = 1;
// 			if (i === tabs.length - 1) {
// 				setTimeout(() => {
// 					console.log("expanded status");
// 					setTabStatus("expanded");
// 				}, TAB_TIMEOUT * tabs.length);
// 			}
// 		}, TAB_TIMEOUT * i);
// 	}
// };

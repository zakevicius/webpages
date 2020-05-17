import React, { useRef, useState, useEffect } from "react";
import "./tabList.css";
import Tab from "./Tab.jsx";
import tabs from "../json/tabs.json";

import HomeLink from "../elements/HomeLink.jsx";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;
const TAB_TIMEOUT = 50;

const TabList = ({ handleOnClick, handleOnHomeClick, page }) => {
	const [tabStatus, setTabStatus] = useState("shrinked");
	const [activeTab, setActiveTab] = useState(0);
	const subRef = useRef();

	useEffect(() => {
		if (page.cat === "all" || tabStatus === "expanded") shrink();
	}, [page.cat]);

	const handleTabClick = (tabData) => {
		if (tabData.type === "primary") {
			let newTab = activeTab;
			newTab = primaryTabs.findIndex((tab) => tab.text === tabData.text);

			if (tabStatus === "expanded" || tabStatus === "shrinked") {
				console.log(tabStatus);
				if (
					primaryTabs[activeTab] !== primaryTabs[newTab] &&
					primaryTabs[newTab].subCat &&
					(tabStatus === "expanded" || tabStatus === "expanding")
				) {
					console.log("1st");
					shrink();
					setTimeout(() => {
						setActiveTab(newTab);
						expand();
					}, 500);
				} else if (tabStatus === "expanded" || tabStatus === "expanding") {
					console.log("2nd");
					shrink();
					setTimeout(() => {
						setActiveTab(newTab);
					}, Math.max(secondaryTabs[newTab].length * TAB_TIMEOUT + TAB_TIMEOUT, 500));
				} else if (
					secondaryTabs[newTab].length > 0 &&
					tabStatus === "shrinked"
				) {
					console.log("3rd");
					console.log(secondaryTabs[newTab].length);
					expand();
					setActiveTab(newTab);
				}
				handleOnClick(tabData);
			} else if (!primaryTabs[newTab].subCat) {
				shrink();
			}
		} else {
			handleOnClick(tabData);
		}
		// if (tabData.subCat === false && tabStatus !== "shrinked") {
		//   shrink();
		//   return;
		// }
	};

	const shrink = () => {
		document.querySelector(".tab-list.secondary").style.top = "0px";
		const tabs = document.querySelectorAll(".tab.secondary");
		setTabStatus("shrinking");

		if (!tabs.length) {
			if (tabStatus === "shrinking") {
				setTabStatus("shrinked");
			} else {
				setTabStatus("expanded");
			}
		}

		for (let i = tabs.length - 1; i >= 0; i--) {
			tabs[i].style.top = "-50px";
			setTimeout(() => {
				tabs[i].style.top = "0px";
				tabs[i].style.opacity = 0;
				if (i === 0) {
					setTimeout(() => {
						setTabStatus("shrinked");
					}, TAB_TIMEOUT * tabs.length);
				}
			}, TAB_TIMEOUT * (tabs.length - i));
		}
	};

	const expand = () => {
		document.querySelector(".tab-list.secondary").style.top = "-50px";
		const tabs = document.querySelectorAll(".tab.secondary");
		setTabStatus("expanding");

		if (!tabs.length) {
			if (tabStatus === "expanding") {
				setTabStatus("expanded");
			} else {
				setTabStatus("shrinked");
			}
			return;
		}

		for (let i = 0; i < tabs.length; i++) {
			tabs[i].style.top = "50px";
			setTimeout(() => {
				tabs[i].style.top = "0px";
				tabs[i].style.opacity = 1;
				if (i === tabs.length - 1) {
					setTimeout(() => {
						console.log("expanded status");
						setTabStatus("expanded");
					}, TAB_TIMEOUT * tabs.length);
				}
			}, TAB_TIMEOUT * i);
		}
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

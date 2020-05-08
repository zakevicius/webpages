import React, { useRef, useState, useEffect } from "react";
import "./tabList.css";
import Tab from "./Tab.jsx";
import tabs from "../json/tabs.json";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;
const TAB_TIMEOUT = 100;

const TabList = ({ handleOnClick, page }) => {
  const [tabStatus, setTabStatus] = useState("shrinked");
  const [activeTab, setActiveTab] = useState(0);
  const subRef = useRef();

  useEffect(() => {
    if (page.cat === "all" && tabStatus === "expanded") shrink();
  }, [page.cat]);

  const handleTabClick = (tabData) => {
    handleOnClick(tabData);

    if (tabData.type === "primary") {
      const newTab = primaryTabs.findIndex((tab) => tab.text === tabData.text);

      if (
        primaryTabs[activeTab] !== primaryTabs[newTab] &&
        primaryTabs[activeTab].subCat === primaryTabs[newTab].subCat &&
        (tabStatus === "expanded" || tabStatus === "expanding")
      ) {
        shrink();
        setTimeout(() => {
          setActiveTab(newTab);
          expand();
        }, 700);
        return;
      }

      if (tabStatus === "expanded" || tabStatus === "expanding") {
        shrink();
        setTimeout(
          () => setActiveTab(newTab),
          Math.max(
            secondaryTabs[newTab].length * TAB_TIMEOUT + TAB_TIMEOUT,
            700
          )
        );
        return;
      }

      if (secondaryTabs[newTab].length > 0 && tabStatus === "shrinked") {
        expand();
        setActiveTab(newTab);
        return;
      }
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

    for (let i = tabs.length - 1; i >= 0; i--) {
      tabs[i].style.top = "-50px";
      setTimeout(() => {
        tabs[i].style.top = "0px";
        tabs[i].style.opacity = 0;
        if (i === 0) {
          setTimeout(() => {
            setTabStatus("shrinked");
          }, TAB_TIMEOUT);
        }
      }, TAB_TIMEOUT * (tabs.length - i));
    }
  };

  const expand = () => {
    document.querySelector(".tab-list.secondary").style.top = "-50px";
    const tabs = document.querySelectorAll(".tab.secondary");
    setTabStatus("expanding");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.top = "50px";
      setTimeout(() => {
        tabs[i].style.top = "0px";
        tabs[i].style.opacity = 1;
        if (i === tabs.length - 1) {
          setTimeout(() => {
            setTabStatus("expanded");
          }, TAB_TIMEOUT);
        }
      }, TAB_TIMEOUT * i);
    }
  };

  return (
    <div className={`tab-div flex all-centered wrap width`}>
      <div className={`tab-list flex primary`}>
        {primaryTabs.map((tab) => (
          <Tab
            key={tab.id}
            data={tab}
            icon={tab.subcat ? "show-icon" : ""}
            type='primary'
            handleTabClick={handleTabClick}
          />
        ))}
      </div>
      <div ref={subRef} className={`tab-list flex secondary`}>
        {secondaryTabs[activeTab].map((tab, i) => (
          <Tab
            key={tab.id ? tab.id : i}
            data={tab}
            type='secondary'
            handleTabClick={handleTabClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TabList;

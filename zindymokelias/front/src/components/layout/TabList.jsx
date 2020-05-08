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
  const subRef = useRef();

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
    document.querySelector(".tab-list.secondary").style.top = "0px";
    const tabs = document.querySelectorAll(".tab.secondary");
    for (let i = tabs.length - 1; i >= 0; i--) {
      tabs[i].style.top = "-50px";
      setTimeout(() => {
        tabs[i].style.top = "0px";
        if (i === 0) setTabExpanded(false);
      }, 100 * (tabs.length - i));
    }
  };

  const expand = () => {
    document.querySelector(".tab-list.secondary").style.top = "-50px";
    const tabs = document.querySelectorAll(".tab.secondary");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.top = "50px";
      setTimeout(() => {
        tabs[i].style.top = "0px";
        if (i === tabs.length - 1) {
          setTabExpanded(true);
        }
      }, 100 * i);
    }
  };

  return (
    <div className={`tab-div flex all-centered wrap width`}>
      <div className={`tab-list flex all-centered primary`}>
        {primaryTabs.map((tab) => (
          <Tab
            key={tab.id}
            data={tab}
            type='primary'
            handleTabClick={handleTabClick}
          />
        ))}
      </div>
      <div ref={subRef} className={`tab-list flex all-centered secondary`}>
        {secondaryTabs[activeTab].map((tab) => (
          <Tab
            key={tab.id}
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

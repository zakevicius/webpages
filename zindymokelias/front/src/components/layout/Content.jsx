import React, { useEffect } from "react";
import PostList from "../posts/PostList.jsx";
import About from "../about/About.jsx";
import "./content.css";
import tabs from "../json/tabs.json";

const primaryTabs = tabs.primary;
const secondaryTabs = tabs.secondary;

const subTabs = [];

secondaryTabs.forEach((group) => {
  group.forEach((el) => subTabs.push(el));
});

const Content = ({ page, subPage, cat, subCat }) => {
  const renderContent = () => {
    if (subPage) {
      for (let tab of subTabs) {
        if (tab.subCat === subCat && tab.cat === cat) {
          return <PostList tab={tab} />;
        }
      }
    } else if (page) {
      for (let tab of primaryTabs) {
        if (tab.cat === cat) {
          return <PostList tab={tab} />;
        }
      }
    } else {
      return <PostList cat='all' />;
    }
  };

  return (
    <div className='container flex width middle-X content wrap'>
      {renderContent()}
    </div>
  );
};

export default Content;

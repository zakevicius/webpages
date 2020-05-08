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

const Content = ({ page }) => {
  const renderContent = () => {
    if (page.cat === "all") return <PostList />;
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
    <div className='container flex width middle-X content wrap'>
      {renderContent()}
    </div>
  );
};

export default Content;

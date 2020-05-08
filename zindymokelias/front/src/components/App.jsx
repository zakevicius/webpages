import React, { Fragment, useState, useEffect } from "react";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Content from "./layout/Content.jsx";
import TabList from "./layout/TabList.jsx";
import HomeLink from "./elements/HomeLink.jsx";
import "./app.css";

const App = () => {
  const [page, setPage] = useState({ cat: "all" });

  useEffect(() => {}, [page]);

  const handleOnTabClick = (tab) => {
    setPage({ ...page, ...tab });
  };

  const handleOnHomeClick = () => {
    setPage({ cat: "all" });
  };

  return (
    <Fragment>
      <Header />
      <HomeLink handleOnClick={handleOnHomeClick} />
      <TabList handleOnClick={handleOnTabClick} page={page} />
      <Content page={page} />
      <Footer />
    </Fragment>
  );
};

export default App;

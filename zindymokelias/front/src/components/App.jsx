import React, { Fragment, useState, useEffect } from "react";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Content from "./layout/Content.jsx";
import TabList from "./layout/TabList.jsx";
import "./app.css";

const App = () => {
  const [page, setPage] = useState();
  const [subPage, setSubPage] = useState();
  const [cat, setCat] = useState();
  const [subCat, setSubCat] = useState();

  useEffect(() => {
    console.log(page, subPage, cat, subCat);
  }, [page]);

  const handleOnClick = (page, type, data) => {
    setCat(data.cat);
    setSubCat(data.subCat);

    if (type === "primary" && page !== "Žindymas") {
      setPage(page);
      setSubPage(null);
    } else if (type === "secondary") {
      setSubPage(page);
    }
  };

  return (
    <Fragment>
      <Header />
      <TabList handleOnClick={handleOnClick} />
      <Content cat={cat} subCat={subCat} page={page} subPage={subPage} />
      <Footer />
    </Fragment>
  );
};

export default App;

import React, { Fragment } from "react";

import Header from "../layout/Header";
import Alerts from "../layout/Alerts";
import Content from "../layout/Content";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="container flex wrap">
        <Alerts />
        <Content />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;

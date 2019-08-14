import React, { Fragment } from 'react';

import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import Alerts from '../layout/Alerts';
import Content from '../layout/Content';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Alerts />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default Home

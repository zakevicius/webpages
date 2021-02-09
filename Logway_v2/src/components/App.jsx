import React from "react";
import "../style/index.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import Logo from "./elements/Logo.jsx";

const App = () => {
  return (
    <>
      {/* <Logo /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;

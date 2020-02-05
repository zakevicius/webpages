import React from "react";
import { LeftDiv } from "../../../styles/main";
import Header from "./Header";
import Content from "./Content";

function Left() {
  return (
    <LeftDiv>
      <Header />
      <Content />
    </LeftDiv>
  );
}

export default Left;

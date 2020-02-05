import React from "react";
import { Body } from "./styles/main";
import Left from "./components/page/left/Left.js";
import Right from "./components/page/right/Right.js";

function App() {
  return (
    <Body>
      <Left />
      <Right />
    </Body>
  );
}

export default App;

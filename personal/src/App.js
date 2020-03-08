import React, { useState } from "react";
import Left from "./components/page/left/Left";
import Right from "./components/page/right/Right";
import Header from "./components/page/header/Header";
import Background from "./components/page/background/Background";

import "./styles/main.css";

function App() {
  const [tools, setTools] = useState([]);

  const onProjectHover = tools => {
    setTools(tools);
  };

  const onProjectLeave = () => {
    setTools([]);
  };

  return (
    <div>
      <Background />
      <Header />
      <Left onProjectHover={onProjectHover} onProjectLeave={onProjectLeave} />
      <Right toolsToHighlight={tools} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Left from "./components/page/left/Left.js";
import Right from "./components/page/right/Right.js";

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
      <Left onProjectHover={onProjectHover} onProjectLeave={onProjectLeave} />
      <Right toolsToHighlight={tools} />
    </div>
  );
}

export default App;

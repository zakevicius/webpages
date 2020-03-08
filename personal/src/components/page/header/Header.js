import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    let buttons = document.querySelectorAll(".headerButton");
    let i = 0;
    let interval = setInterval(() => {
      if (i < buttons.length) {
        buttons[i].style.top = "0";
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);
  });

  return (
    <div className="header">
      <a
        href="https://github.com/zakevicius?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="headerButton">My Github</div>
      </a>
      <a href="https://cv.mzh.lt" target="_blank" rel="noopener noreferrer">
        <div className="headerButton">My CV</div>
      </a>
      {/* <div className="headerButton">Contact me</div> */}
    </div>
  );
}

export default Header;

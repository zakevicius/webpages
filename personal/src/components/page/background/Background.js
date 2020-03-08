import React, { useEffect, useState } from "react";

function Background() {
  const [bg, setBg] = useState(0);

  useEffect(() => {
    initBackground();
    setBg(1);
  }, [bg]);

  return <div id="background"></div>;
}

export default Background;

function initBackground() {
  startingLines();

  window.requestAnimationFrame(move);
}

let lines = [];

function startingLines() {
  let bg = document.querySelector("#background");
  const w = bg.clientWidth;
  const h = bg.clientHeight;

  for (let i = lines.length; i < 50; i++) {
    let randomX = Math.floor(Math.random() * w);
    let randomY = Math.floor(Math.random() * h);

    let line = document.createElement("div");
    line.classList.add("bg-line");
    line.style.top = randomY + "px";
    line.style.left = randomX + "px";
    line.style.width = Math.ceil(Math.random() * 1) + "px";
    bg.appendChild(line);
    lines.push(line);
  }
}

function newLines() {
  let bg = document.querySelector("#background");
  const w = bg.clientWidth;
  const h = bg.clientHeight;

  for (let i = lines.length; i < 60; i++) {
    let randomX = Math.floor(Math.random() * w - Math.random() * 1000);
    let randomY = h;

    let line = document.createElement("div");
    line.classList.add("bg-line");
    line.style.top = randomY + "px";
    line.style.left = randomX + "px";
    line.style.width = Math.ceil(Math.random() * 1) + "px";
    bg.appendChild(line);
    lines.push(line);
  }
}

function move() {
  lines.forEach((line, i) => {
    let speed = Math.ceil(Math.random() * 1);
    line.style.top = parseInt(line.style.top.slice(0, -2)) - speed + "px";
    line.style.left = parseInt(line.style.left.slice(0, -2)) + speed + "px";
    if (line.offsetTop < 0) {
      newLines();
    }
    if (line.offsetTop < -500) {
      lines.splice(i, 1);
      line.parentNode.removeChild(line);
    }
  });

  window.requestAnimationFrame(move);
}

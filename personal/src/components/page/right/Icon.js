import React from "react";

export default function Icon(props) {
  const { src, name } = props.icon;
  let style = "";

  if (props.toolsToHighlight.length > 0)
    if (props.toolsToHighlight.indexOf(name) > -1) {
      style = "highlighted";
    } else {
      style = "shrinked";
    }
  else {
    style = "";
  }

  return (
    <div
      className={`icon ${style}`}
      name={name}
      style={{ background: `url(${src})`, backgroundSize: "cover" }}
    ></div>
  );
}

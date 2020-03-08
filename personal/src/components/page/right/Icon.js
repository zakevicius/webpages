import React, { useState } from "react";

export default function Icon(props) {
  const { src, name } = props.icon;

  const [iconName, setIconName] = useState(0);

  const onHover = icon => {
    setIconName(icon);
  };

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

  const renderIconName = () => {
    if (!iconName) {
      return;
    } else {
      return <div className="iconName">{name}</div>;
    }
  };

  return (
    <div
      onMouseEnter={() => onHover(name)}
      onMouseLeave={() => onHover(0)}
      className={`icon ${style}`}
      name={name}
      style={{ background: `url(${src})`, backgroundSize: "cover" }}
    >
      {renderIconName()}
    </div>
  );
}

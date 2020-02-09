import React from "react";

export default function Icon(props) {
  return (
    <div
      className="icon"
      style={{ background: `url(${props.src})`, backgroundSize: "cover" }}
    ></div>
  );
}

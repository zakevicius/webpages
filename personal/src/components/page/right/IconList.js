import React from "react";
import Icon from "./Icon";
import ajax from "../../../assets/skills/ajax.png";
import api from "../../../assets/skills/api.png";
import bootstrap from "../../../assets/skills/bootstrap.png";
import css from "../../../assets/skills/css.png";
import express from "../../../assets/skills/express.png";
import git from "../../../assets/skills/git.png";
import heroku from "../../../assets/skills/heroku.png";
import html from "../../../assets/skills/html.png";
import jquery from "../../../assets/skills/jquery.png";
import js from "../../../assets/skills/js.png";
import json from "../../../assets/skills/json.png";
import mysql from "../../../assets/skills/mysql.png";
import mongodb from "../../../assets/skills/mongodb.png";
import nodejs from "../../../assets/skills/nodejs.png";
import php from "../../../assets/skills/php.png";
import react from "../../../assets/skills/react.png";
import redux from "../../../assets/skills/redux.png";
import semanticui from "../../../assets/skills/semanticui.png";

const icons = [
  { name: "ajax", src: ajax },
  { name: "api", src: api },
  { name: "bootstrap", src: bootstrap },
  { name: "css", src: css },
  { name: "express", src: express },
  { name: "git", src: git },
  { name: "heroku", src: heroku },
  { name: "html", src: html },
  { name: "jquery", src: jquery },
  { name: "js", src: js },
  { name: "json", src: json },
  { name: "mysql", src: mysql },
  { name: "mongodb", src: mongodb },
  { name: "nodejs", src: nodejs },
  { name: "php", src: php },
  { name: "react", src: react },
  { name: "redux", src: redux },
  { name: "semanticui", src: semanticui }
];

function IconList(props) {
  const renderIcons = ic => {
    return ic.map((icon, i) => (
      <Icon icon={icon} key={i} toolsToHighlight={props.toolsToHighlight} />
    ));
  };

  return <div className="styledIconList">{renderIcons(icons)};</div>;
}

export default IconList;

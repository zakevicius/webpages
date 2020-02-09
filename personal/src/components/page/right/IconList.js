import React from "react";
import Icon from "./Icon";
import ajax from "../../../assets/skills/ajax.png";
import api from "../../../assets/skills/api.png";
import bootstrap from "../../../assets/skills/bootstrap.png";
import css from "../../../assets/skills/css.png";
import express from "../../../assets/skills/express.png";
import git from "../../../assets/skills/git.png";
import google from "../../../assets/skills/google.png";
import heroku from "../../../assets/skills/heroku.png";
import html from "../../../assets/skills/html.png";
import jquery from "../../../assets/skills/jquery.png";
import js from "../../../assets/skills/js.png";
import json from "../../../assets/skills/json.png";
import mongodb from "../../../assets/skills/mongodb.png";
import mysql from "../../../assets/skills/mysql.png";
import nodejs from "../../../assets/skills/nodejs.png";
import php from "../../../assets/skills/php.png";
import react from "../../../assets/skills/react.png";
import redux from "../../../assets/skills/redux.png";
import semanticui from "../../../assets/skills/semanticui.png";

const icons = [
  ajax,
  api,
  bootstrap,
  css,
  express,
  git,
  google,
  heroku,
  html,
  jquery,
  js,
  json,
  mongodb,
  mysql,
  nodejs,
  php,
  react,
  redux,
  semanticui
];

function IconList() {
  const renderIcons = ic => {
    return ic.map((icon, i) => <Icon src={icon} key={i} />);
  };

  return <div className="styledIconList">{renderIcons(icons)};</div>;
}

export default IconList;

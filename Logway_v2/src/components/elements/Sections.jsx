import React from "react";
import Section from './Section.jsx';
import sections from './sections.json';


const Sections = () => {

  return sections.map(item => <Section key={item.section} data={item}/>)
};

export default Sections;

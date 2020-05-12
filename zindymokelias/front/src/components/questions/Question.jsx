import React, { useEffect, useRef } from "react";
import "./question.css";

const Question = ({ question, index }) => {
	useEffect(() => {}, [question._id]);

	return <div className="question flex wrap">Question</div>;
};

export default Question;

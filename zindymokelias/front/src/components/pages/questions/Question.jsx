import React, { useEffect, useRef } from "react";
import "./question.css";

const Question = ({ question, index }) => {
	// useEffect(() => {}, [question._id]);

	return (
		<div className="question-cont section width-100 flex wrap">
			<div className="question width-100">
				<h1>Question</h1>
			</div>
			<div className="answer width-100">Answer</div>
		</div>
	);
};

export default Question;

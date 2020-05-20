import React, { useState, useContext } from "react";
import { MainContext } from "../../../contexts/MainContext.jsx";
import api from "../../api/api";
import { history } from "../../history.js";

import Button from "../../elements/Button.jsx";
import Error from "../../elements/Error.jsx";
import "./form.css";

const FormQuestion = () => {
	const { dispatch } = useContext(MainContext);
	const [errors, setErrors] = useState([]);

	const [questionData, setQuestionData] = useState({
		question: "",
		answer: "",
		cat: "Default",
	});

	const onInputChange = (e) => {
		setQuestionData({
			...questionData,
			[e.target.name]: e.target.value,
		});
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();

		const res = await api.post("/questions/new", questionData);

		if (!res.data.errors) {
			dispatch({ type: "ADD_QUESTION", payload: res.data.question });
			history.push("/");
		} else {
			setErrors(res.data.errors);
		}
	};

	const renderErrors = (field) => {
		if (errors) {
			const errorsToRender = errors.filter((err) => err.param === field);
			return errorsToRender.map((err) => (
				<Error key={err.param} error={err.msg} />
			));
		}
		return;
	};

	const { question, answer, cat } = questionData;
	return (
		<div className="admin-form flex wrap">
			<form onSubmit={onFormSubmit}>
				<label htmlFor="input-question">Question</label>
				<input
					id="input-question"
					type="text"
					name="question"
					value={question}
					onChange={onInputChange}
				/>
				{renderErrors("question")}
				<label htmlFor="input-answer">Answer</label>
				<textarea
					id="input-answer"
					name="answer"
					value={answer}
					onChange={onInputChange}
				/>
				{renderErrors("answer")}
				<select value={cat} name="cat" onChange={onInputChange}>
					<option value="">Select category...</option>
					<option value="articles">Articles</option>
					<option value="videos">Videos</option>
					<option value="questions">Questions</option>
				</select>
				{renderErrors("cat")}
				<Button type="success" text="Submit" />
			</form>
		</div>
	);
};

export default FormQuestion;

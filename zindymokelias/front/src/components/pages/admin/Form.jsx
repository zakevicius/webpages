import React, { useState, useContext } from "react";
import { PostContext } from "../../../contexts/PostContext.jsx";
import api from "../../api/api";
import { history } from "../../history.js";
import resizeImage from "./resizeImage";

import Button from "../../elements/Button.jsx";
import Error from "../../elements/Error.jsx";

import faker from "faker";

const PostForm = () => {
	const { dispatch } = useContext(PostContext);
	const [errors, setErrors] = useState([]);
	const [postData, setPostData] = useState({
		title: "",
		intro: "",
		content: "",
		cat: "",
		subCat: "",
		image: "",
	});
	const [questionData, setQuestionData] = useState({
		question: "",
		answer: "",
		cat: "Default",
	});

	const onInputChange = (e) => {
		let value = "";

		if (e.target.name === "image") {
			value = e.target.files[0];
		} else {
			value = e.target.value;
		}
		setPostData({
			...postData,
			[e.target.name]: value,
		});
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();

		const config = {
			file: postData.image,
			maxSize: 1000,
		};
		const resizedImage = await resizeImage(config);

		const data = new FormData();

		for (let key in postData) {
			if (key === "image") {
				data.append("image", resizedImage);
			} else {
				data.append(key, postData[key]);
			}
		}

		const res = await api.post("/posts/new", data);

		if (!res.data.errors) {
			dispatch({ type: "ADD_POST", payload: res.data.post });
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

	const { title, intro, content, cat: catPost, subCat } = postData;
	const { question, answer, cat: catQuestion } = questionData;

	return (
		<>
			<div className="post-form">
				<form onSubmit={onFormSubmit} encType="multipart/form-data">
					<label htmlFor="input-title">Title</label>
					<input
						id="input-title"
						type="text"
						name="title"
						value={title}
						onChange={onInputChange}
					/>
					{renderErrors("title")}
					<label htmlFor="input-intro">Intro</label>
					<textarea
						id="input-intro"
						name="intro"
						value={intro}
						onChange={onInputChange}
					/>
					{renderErrors("intro")}
					<label htmlFor="input-content">Content</label>
					<textarea
						id="input-content"
						name="content"
						value={content}
						onChange={onInputChange}
					/>
					{renderErrors("content")}
					<select value={catPost} name="cat" onChange={onInputChange}>
						<option value="">Select category...</option>
						<option value="articles">Articles</option>
						<option value="videos">Videos</option>
						<option value="questions">Questions</option>
					</select>
					{renderErrors("cat")}
					<select value={subCat} name="subCat" onChange={onInputChange}>
						<option value="">Select subcategory...</option>
						<option value="articles1">articles 1</option>
						<option value="articles2">articles 2</option>
						<option value="articles3">articles 3</option>
						<option value="videos1">videos1</option>
						<option value="videos2">videos2</option>
						<option value="videos3">videos3</option>
						<option value="videos4">videos4</option>
					</select>
					{renderErrors("subCat")}
					<label htmlFor="input-image">Image</label>
					<input
						id="input-image"
						type="file"
						name="image"
						onChange={onInputChange}
					/>
					<Button type="success" text="Submit" />
				</form>
			</div>

			<div className="post-form">
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
					<select value={catQuestion} name="cat" onChange={onInputChange}>
						<option value="">Select category...</option>
						<option value="articles">Articles</option>
						<option value="videos">Videos</option>
						<option value="questions">Questions</option>
					</select>
					{renderErrors("cat")}
					<Button type="success" text="Submit" />
				</form>
			</div>
		</>
	);
};

export default PostForm;

const post = {
	title: faker.lorem.sentence(4),
	intro: faker.lorem.sentences(4),
	content: faker.lorem.paragraphs(3, "---------"),
	cat: "videos",
	subCat: `videos${Math.ceil(Math.random() * 4)}`,
	image: "",
};

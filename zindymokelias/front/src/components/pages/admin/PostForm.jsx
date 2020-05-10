import React, { useState, useContext } from "react";
import { PostContext } from "../../../contexts/PostContext.jsx";
import api from "../../api/api";
import { history } from "../../history.js";

import Button from "../../elements/Button.jsx";
import Error from "../../elements/Error.jsx";

const PostForm = () => {
	const { dispatch } = useContext(PostContext);
	const [errors, setErrors] = useState([]);
	const [formData, setFormData] = useState({
		title: "",
		intro: "",
		content: "",
		cat: "",
		subCat: "",
	});

	const onFormSubmit = async (e) => {
		e.preventDefault();
		const res = await api.post("/posts/new", formData);
		if (!res.data.errors) {
			dispatch({ type: "ADD_POST", payload: res.data.post });
			history.push("/");
		} else {
			setErrors(res.data.errors);
		}
	};

	const onInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
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

	const { title, intro, content, cat, subCat } = formData;

	return (
		<div className="post-form">
			<form onSubmit={onFormSubmit}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					value={title}
					onChange={onInputChange}
				/>
				{renderErrors("title")}
				<label htmlFor="title">Intro</label>
				<textarea name="intro" value={intro} onChange={onInputChange} />
				{renderErrors("intro")}
				<label htmlFor="title">Content</label>
				<textarea name="content" value={content} onChange={onInputChange} />
				{renderErrors("content")}
				<select value={cat} name="cat" onChange={onInputChange}>
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
				<Button type="success" text="Submit" />
			</form>
		</div>
	);
};

export default PostForm;

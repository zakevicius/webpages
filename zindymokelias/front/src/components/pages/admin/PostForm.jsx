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
		console.log(formData);
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
					<option value="Cat1">Cat 1</option>
					<option value="Cat2">Cat 2</option>
					<option value="Cat3">Cat 3</option>
				</select>
				{renderErrors("cat")}
				<select value={subCat} name="subCat" onChange={onInputChange}>
					<option value="">Select subcategory...</option>
					<option value="subCat1">subCat 1</option>
					<option value="subCat1">subCat 2</option>
					<option value="subCat1">subCat 3</option>
				</select>
				{renderErrors("cat")}
				<Button type="success" text="Submit" />
			</form>
		</div>
	);
};

export default PostForm;

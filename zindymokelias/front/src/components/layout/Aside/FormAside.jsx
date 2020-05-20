import React, { useState } from "react";
import Button from "../../elements/Button.jsx";
import "./formAside.css";

const FormAside = () => {
	const [formData, setFormData] = useState({
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					placeholder="E-mail"
					value={formData.email}
					onChange={handleChange}
				/>
				<textarea
					name="message"
					cols="30"
					rows="8"
					spellCheck="true"
					placeholder="Žinutė"
					value={formData.message}
					onChange={handleChange}
				></textarea>
				<Button type="warning small width" text="Siųsti" />
			</form>
		</div>
	);
};

export default FormAside;

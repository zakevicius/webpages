import React from "react";
import Button from "../elements/Button.jsx";

const Post = () => {
	return (
		<div>
			<h2>Post</h2>
			<Button text="Apie mane" />
			<Button text="Informacija apie zindyma su temom" type="danger" />
			<Button text="video" type="warning" />
			<Button text="Klausimai ir atsakymai" type="success" />
		</div>
	);
};

export default Post;

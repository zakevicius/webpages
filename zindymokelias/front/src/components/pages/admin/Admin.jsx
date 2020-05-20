import React, { useState, useContext } from "react";
import faker from "faker";

import FormArticle from "./FormArticle.jsx";
import FormQuestion from "./FormQuestion.jsx";

const Admin = () => {
	return (
		<div className="admin-page flex wrap width-100">
			<div className="selection flex width-100 middle-X">
				<div className="admin new article">Naujas straipsnis</div>
				<div className="admin new question">Naujas klausimas</div>
				<div className="admin new video">Naujas video</div>
			</div>
			<FormArticle />
			<FormQuestion />
		</div>
	);
};

export default Admin;

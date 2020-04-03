import React from "react";

export default function Button({ text, additionalClass, type, id, ...props }) {
	const onClickHandler = () => {
		if (props.onClickHandler) {
			props.onClickHandler(id);
		}
	};

	return (
		<button className={`btn ${additionalClass}`} onClick={onClickHandler}>
			{text}
		</button>
	);
}

import React from "react";

export default function Button({ text, additionalClass, type, ...props }) {
	const onClickHandler = () => {
		if (props.onClickHandler) {
			props.onClickHandler(type);
		}
	};

	return (
		<button className={`btn ${additionalClass}`} onClick={onClickHandler}>
			{text}
		</button>
	);
}

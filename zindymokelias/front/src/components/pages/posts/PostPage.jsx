import React, { useContext, useState, useEffect } from "react";
import Post from "./Post.jsx";
import { MainContext } from "../../../contexts/MainContext.jsx";

const PostPage = ({ id }) => {
	const { state, dispatch } = useContext(MainContext);

	const post = state.posts.filter((post) => post._id === id)[0];

	return <Post post={post} full={true} />;
};

export default PostPage;

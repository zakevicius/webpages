const express = require("express");
const { handleErrors } = require("./middlewares");
const { requireTitle, requireIntro, requireContent } = require("./validators");
const router = express.Router();

const Post = require("../models/Post");

router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.send({ posts });
	} catch (err) {
		res.send(err);
	}
});

router.post("/create", [
	requireTitle,
	requireIntro,
	requireContent
], handleErrors(), async (req, res) => {

	const { title, intro, content } = req.body;

	const post = new Post({
		title,
		intro,
		content,
		user: "test"
	})

	await post.save();

	res.send({ post })
})

module.exports = router;

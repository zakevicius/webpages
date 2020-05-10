const express = require("express");
const { handleErrors } = require("./middlewares");
const {
	requireTitle,
	requireIntro,
	requireContent,
	requireCat,
	requireSubCat,
} = require("./validators");
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

router.post(
	"/new",
	[requireTitle, requireIntro, requireContent, requireCat, requireSubCat],
	handleErrors(),
	async (req, res) => {
		const { title, intro, content, cat, subCat } = req.body;

		const post = new Post({
			title,
			intro,
			content,
			cat,
			subCat,
			user: "test",
		});

		await post.save();

		res.send({ post });
	}
);

module.exports = router;

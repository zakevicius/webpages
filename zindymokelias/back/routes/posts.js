const express = require("express");
const multer = require("multer");

const { handleErrors } = require("./middlewares");
const {
	requireTitle,
	requireIntro,
	requireContent,
	requireCat,
	requireSubCat,
} = require("./validators");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const Post = require("../models/Post");
const File = require("../models/File");

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
	upload.fields([{ name: "image" }]),
	[requireTitle, requireIntro, requireContent, requireCat, requireSubCat],
	handleErrors(),
	async (req, res) => {
		console.log(req.files);
		const { title, intro, content, cat, subCat } = req.body;
		const image = req.files.image[0].buffer.toString("base64");

		const post = new Post({
			title,
			intro,
			content,
			cat,
			subCat,
			image,
			user: "test",
		});

		await post.save();

		res.send({ post });
	}
);

module.exports = router;

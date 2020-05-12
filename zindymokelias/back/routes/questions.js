const express = require("express");

const { handleErrors } = require("./middlewares");
const { requireQuestion, requireAnswer, requireCat } = require("./validators");

const router = express.Router();
const Question = require("../models/Question");

router.get("/", async (req, res) => {
	try {
		const questions = await Question.find().sort({ date: -1 });
		res.send(questions);
	} catch (err) {
		res.send(err);
	}
});

router.post(
	"/new",
	[requireQuestion, requireAnswer, requireCat],
	handleErrors(),
	async (req, res) => {
		const { question, answer, cat } = req.body;

		const newQuestion = new Question({
			question,
			answer,
			cat,
			user: "test",
		});

		await newQuestion.save();

		res.send({ newQuestion });
	}
);

module.exports = router;

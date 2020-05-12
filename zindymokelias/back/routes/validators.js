const { check } = require("express-validator");

module.exports = {
	requireTitle: check("title")
		.trim()
		.not()
		.isEmpty()
		.withMessage("Title is required"),
	requireIntro: check("intro")
		.trim()
		.not()
		.isEmpty()
		.withMessage("Intro is required"),
	requireContent: check("content")
		.trim()
		.not()
		.isEmpty()
		.withMessage("Content is required"),
	requireCat: check("cat")
		.trim()
		.not()
		.isEmpty()
		.withMessage("Category is required"),
	requireSubCat: check("subCat")
		.trim()
		.not()
		.isEmpty()
		.withMessage("Subcategory is required"),
	requireQuestion: check("question")
		.trim()
		.not()
		.isEmpty()
		.withMessage("Question is required"),
	requireAnswer: check("answer")
		.trim()
		.not()
		.isEmpty()
		.withMessage("Answer is required"),
};

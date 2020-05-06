const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
	try {
		res.send("post");
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;

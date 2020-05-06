const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/auth", [], async (req, res) => {
	try {
		res.send("yes");
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;

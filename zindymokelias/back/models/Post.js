const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	title: {
		type: String,
	},
	content: {
		type: String,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	files: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "files",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("post", PostSchema);

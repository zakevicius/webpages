const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	title: {
		type: String,
	},
	intro: {
		type: String,
	},
	content: {
		type: String,
	},
	cat: {
		type: String,
	},
	subCat: {
		type: String,
	},
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "users",
	// },
	user: {
		type: String,
	},
	image: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("post", PostSchema);

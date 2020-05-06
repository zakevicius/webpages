const mongoose = require("mongoose");

const FileSchema = mongoose.Schema({
	type: {
		type: String,
	},
	name: {
		type: String,
	},
	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "post",
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	base64: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("file", FileSchema);

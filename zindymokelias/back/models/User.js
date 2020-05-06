const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: "user",
	},
	date: {
		type: Date,
		default: Date.now,
	},
	posts: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "posts",
	},
});

module.exports = mongoose.model("user", UserSchema);

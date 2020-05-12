const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
	question: {
		type: String,
	},
	answer: {
		type: String,
	},
	cat: {
		type: String,
	},
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "users",
	// },
	user: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("question", QuestionSchema);

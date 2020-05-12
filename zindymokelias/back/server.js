const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
app.use(
	(req, res, next) => {
		res.header("Access-Control-Allow-Headers", "Content-Type");
		res.header("Access-Control-Allow-Origin", "*");
		next();
	},
	[cors()]
);

app.options("*", cors());

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
	console.log("api");
	res.send("api");
});

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));
app.use("/questions", require("./routes/questions"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

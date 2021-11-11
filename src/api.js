const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		data: {
			message: "Welcome!",
		},
	});
});

router.get("/hello", (req, res) => {
	res.status(200).json({
		success: true,
		data: {
			translation: "hola",
		},
	});
});

app.use("/api", router);

module.exports.handler = serverless(app);

const express = require("express");
const serverless = require("serverless-http");

require("dotenv").config({ path: __dirname + "/.env" });

const connectDB = require("./config/db");
const Game = require("./models/Game");
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: "Welcome",
	});
});
router.get("/games", async (req, res) => {
	try {
		const games = await Game.find();
		console.log(games);
		res.status(200).json({
			success: true,
			data: games,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Something went wrong",
			error,
		});
	}
});
router.post("/games", async (req, res) => {
	const { title, description, materials } = req.body;
	try {
		const game = await Game.create({
			title,
			description,
			materials,
		});
		res.status(200).json({
			success: true,
			data: game,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Something went wrong. Please hold on.",
			error,
		});
	}
});

app.use("/api", router);

console.log(process.env.MONGO_URI);

module.exports.handler = serverless(app);

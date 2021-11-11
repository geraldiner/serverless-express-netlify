const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;

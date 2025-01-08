const mongoose = require("mongoose");
const gamesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model('game', gamesSchema)
module.exports= Game

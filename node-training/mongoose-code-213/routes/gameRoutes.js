const express = require("express");
const GameControllers = require("../controllers/gameControllers");
const Game = require("../models/game")

const router = express.Router();

router.get("/games", GameControllers.get_games);

router.get("/games/:id", GameControllers.get_game);

router.post("/games/create", (req, res) => {
  const game = Game(req.body);

  game
    .save()
    .then((game) => {
      res.json(game);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.delete("/games/:id", (req, res) => {
  const id = req.params.id;
  Game.findByIdAndDelete(id)
    .then((deletedGame) => {
      res.json(deletedGame);
    })
    .catch((err) => console.error(err));
});

router.put("/games/:id", (req, res) => {
  const id = req.params.id;
  const updatedDoc = req.body;
  Game.findByIdAndUpdate(id, updatedDoc, { new: true })
    .then((updatedGame) => {
      res.json(updatedGame);
    })
    .catch((err) => console.error(err));
});

module.exports = router;

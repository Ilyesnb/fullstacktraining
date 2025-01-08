const Game = require("../models/game");

const get_games = (req, res) => {
  Game.find()
    .then((games) => {
      res.json(games);
    })
    .catch((err) => {
      console.error(err);
    });
};

const get_game = (req, res) => {
  const id = req.params.id;
  Game.findById(id)
    .then((game) => {
      res.json(game);
    })
    .catch((err) => {
      res.error(err);
    });
};

module.exports = {
  get_games,
  get_game,
};

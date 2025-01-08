const Game = require("../model/games");
const get_games = (req, res) => {
  Game.find().then((games) => {
    res.json(games);
  });
};
const addGames = (req, res) => {
  const game = Game(req.body);
  game
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ error: "Sorry, cannot create this new game" });
    });
};
const upDate = (req, res) => {
  const upDateGame = req.body;
  const id = req.params.id;
  Game.findByIdAndUpdate(id, upDateGame, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch(() => {
      res.json({ error: "Sorry, cannot create this new game" });
    });
};
const deleteDb = (req, res) => {
  const id = req.params.id;
  Game.findByIdAndDelete(id)
    .then((result) => {
      res.json(result);
    })
    .catch(() => {
      res.json({ error: "Sorry, cannot create this new game" });
    });
};
module.exports = {
  deleteDb,
  upDate,
  addGames,
  get_games,
};

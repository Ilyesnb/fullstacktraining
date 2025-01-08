const express = require("express");
const {get_games,upDate,deleteDb,addGames} = require("../controllers/gameControllers");
const router = express.Router();
router.get("/games", get_games);
router.post("/games/create", addGames);
router.put("/games/:id", upDate);
router.delete("/games/:id", deleteDb);
module.exports = router;

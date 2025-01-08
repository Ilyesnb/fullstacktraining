const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Game = require("./models/game");
const gameRoutes = require("./routes/gameRoutes");

const app = express();

app.use(bodyParser.json());

const Uri =
  "mongodb+srv://wassim:wassim@cluster0.ngaowjd.mongodb.net/code213?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(Uri)
  .then(() => {
    console.log("Db connected");
    app.listen(3006, () => {
      console.log("Server is up");
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use(gameRoutes);

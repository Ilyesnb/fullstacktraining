const express = require("express");
const bodyParder = require("body-parser");
const mongoose = require("mongoose");
const gameRoutes = require("./routes/gameRoutes")
const app = express();
app.use(bodyParder.json());
const uri =
  "mongodb+srv://ilyesnabi9:Ilyesou2024@cluster0.nyufwoa.mongodb.net/code213?retryWrites=true&w=majority&appName=Cluster0";
mongoose
.connect(uri)
.then(() => {
  console.log("db connected");
  app.listen(3003, () => {
    console.log("server is running on port 3003");
  });
})
.catch((err)=>{
  console.log(err);
})
app.use(gameRoutes)

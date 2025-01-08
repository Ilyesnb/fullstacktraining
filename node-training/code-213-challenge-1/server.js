const express = require("express");
const PORT = 3020;
const app = express();
// Set the view engine to EJS
app.set("view engine", "ejs");

// Array of names for random selection
const names = ["wassim", "anis", "ilyes", "oussama", "amine"];

// Function to get a random name from the array
const getRandomName = () => {
  const index = Math.floor(Math.random() * names.length);
  return names[index];
};

// Define a route for the root URL
app.get("/", (req, res) => {
  const name = getRandomName();
  res.render("home", { name });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Express server is up and running on port ${PORT}`);
});

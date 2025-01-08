const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Enable parsing of URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store blog data
const blogs = [
  { id: 1, title: "Blog-1", body: "This is the body of the first blog" },
  { id: 2, title: "Blog-2", body: "This is the body of the second blog" },
  { id: 3, title: "Blog-3", body: "This is the body of the third blog" },
];

// Home route to render blogs
app.get("/", (req, res) => {
  res.render("home", { blogs });
});

// Contact route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Create route to render blog creation form
app.get("/create", (req, res) => {
  res.render("create");
});

// Create route to handle form submission and add new blog
app.post("/create", (req, res) => {
  const { title, body } = req.body;
  const id = blogs.length + 1;
  blogs.push({ id, title, body });

  res.redirect("/");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

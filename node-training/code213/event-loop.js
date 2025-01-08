const fs = require("fs");
console.log("This is the first task");
fs.readFile("../res/input.txt", "utf8", (err, result) => {
  console.log("This is the current task");
  if (err) {
    console.error(err);
    return;
  }
  //Asynchronous writing a file
  fs.writeFile("../res/names.txt", result.toUpperCase(), (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
  });
});
console.log("This is the next task");

const http = require("http");
const fs = require("fs");
const PORT = 3007
const server = http.createServer();
server.on("request", (req, res) => {
  //Get the URL requested
  const url = req.url;
  if (url === "/chapter_1") {
    console.log(url)
    //Read the file stream
    const stream = fs.createReadStream("./chapter1.txt", {
      encoding: "utf8",
    });
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Hello world</h1>");
    //on file stream open push the data to the resource body
    stream.on("open", () => {
      stream.pipe(res);
    });
    //on file stream closed end the HTTP message
    stream.on("close", () => {
      res.end();
    });
  }
});

server.listen(3007, () => {
  console.log(`server is listening on ${PORT}`);
});

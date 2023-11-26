const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err,content) => {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h2>HomeTime</h2>");
    });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));

var fs = require("fs"),
  http = require("http");

http
  .createServer(function (req, res) {
    fs.readFile(__dirname + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(3000);

console.log(`Listening on localhost:8080`);

//http://localhost:8080/LandingPage/index.html

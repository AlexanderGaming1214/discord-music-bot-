var http = require("http");

http.createServer(function (req, res) {
    res.write("you bot is online");
    res.end();
  })
  .listen(8080);

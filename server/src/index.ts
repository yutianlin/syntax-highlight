// important configuration files to load
const path = require("path");
//require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// setup express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

app.get("/", (request: any, response: any) => {
  response.json("Hello World");
});

var server = app.listen(port, "localhost", () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

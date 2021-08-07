import ElasticSearchService from "./ElasticSearchService";
import { createDocument, getDocuments } from "./elastic_search.schema";

// important configuration files to load
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// setup express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const elasticSearchService = new ElasticSearchService;

const BodyParser = require("body-parser");
const jsonParser = BodyParser.json();

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

app.get("/elastic/ping", async (request: any, response: any) => {
  response.json(await elasticSearchService.ping());
});

app.post("/elastic/add/:index", async (request: any, response: any) => {
  const index = request.params.index;
  const { value, error } = await createDocument.validate(
    request.body
  );
  if (error) {
    response.status(422).json(error.message);
    return;
  }
  try {
    response.json(await elasticSearchService.addDocument(index, value));
  } catch (e) {
    response.status(422).json(e.message);
  }
});

app.get("/elastic/:index", jsonParser, async (request: any, response: any) => {
  const index = request.params.index;
  const { value, error } = await getDocuments.validate(
    request.body
  );
  if (error) {
    response.status(422).json(error.message);
    return;
  }
  try {
    response.json(await elasticSearchService.search(index, value));
  } catch (e) {
    response.status(422).json(e.message);
  }
});

var server = app.listen(port, "localhost", () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

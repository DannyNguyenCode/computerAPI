require("dotenv").config();
const mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING;
const HTTP_PORT = process.env.PORT || 8080;

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dataService = require("./data-service.js");

const data = dataService(mongoDBConnectionString);

const app = express();
app.use(morgan("combined"));

app.use(bodyParser.json());
app.use(cors());

app.get("/amdprocessors", (req, res) => {
  data
    .getAMDProcessors()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + " within getting AMD processors");
      res.status(500).end();
    });
});

app.get("/intelprocessors", (req, res) => {
  data
    .getIntelProcessors()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + " within getting Intel processors");
      res.status(500).end();
    });
});
app.use((req, res) => {
  res.status(404).end();
});

data
  .connect()
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log("Listening to port: " + HTTP_PORT);
    });
  })
  .catch((err) => {
    console.log("unable to start the server: ", err.message);
    process.exit();
  });

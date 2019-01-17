const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Hello world");
});

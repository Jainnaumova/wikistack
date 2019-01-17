const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const layout = require("./views/layout");

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(layout("Hello world"));
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`app listening in ${PORT}`);
});

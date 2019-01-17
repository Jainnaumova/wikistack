const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const layout = require("./views/layout");
const models = require("./models");
const wiki = require('./routes/wiki');
const user = require('./routes/user');

// const { db } = require("./models");

const morgan = require("morgan");



app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/wiki", require("./routes/wiki"))

app.get("/", (req, res) => {
  res.send(layout("Hello world"));
});

const PORT = 1337;

const testFunc = async () => {
  await models.db.sync();
  app.listen(PORT, () => {
    console.log(`app listening in ${PORT}`);
  });
};
testFunc();

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

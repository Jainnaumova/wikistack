const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const layout = require("./views/layout");
const models = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

// const { db } = require("./models");

const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/wiki", wikiRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => res.redirect("/wiki"));

// app.use("/wiki", require("./routes/wiki"));

// app.use("/user", require("./routes/user"));

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

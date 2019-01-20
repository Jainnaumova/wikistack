const http = require("http");
const app = require("./app");
const models = require("./models");

const server = http.createServer(app);

const PORT = 1337;

// sync() has to be after creating server: line 5
const testFunc = async () => {
  await models.db.sync(); // syncing our DataBase (create Page and User tables through sync() automatically, no need create tables in terminal)
  // await models.Page.sync();  // sync each table separately
  // await models.User.sync();
  server.listen(PORT, () => {
    console.log(`app listening in ${PORT}`);
  });
};
testFunc();

// module.exports = server;

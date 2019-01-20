const http = require("http");
const app = require("./app");
const models = require("./models");

const server = http.createServer(app);

const PORT = 1337;

const testFunc = async () => {
  await models.db.sync();
  server.listen(PORT, () => {
    console.log(`app listening in ${PORT}`);
  });
};
testFunc();

// module.exports = server;

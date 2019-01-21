const express = require("express");
const router = express.Router();
// const db = require("../models/index");
const bodyParser = require("body-parser");
const { Page, User } = require("../models");

const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage
} = require("../views");

router.use(bodyParser.json());

//localhost: 1337/user
router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(userList(allUsers));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    // const pages = await Page.findAll({
    //   where: {
    //     authorId: req.params.id
    //   }
    // });
    const pages = await user.getPages(); // code on top no need because we setup foreinKey as 'authorId' in models/index.js
    res.send(userPages(user, pages));
  } catch (error) {
    next(error);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../models");
const bodyParser = require("body-parser");
const { Page } = require("../models");

const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikipage
} = require("../views");

router.use(bodyParser.json());

// localhost: 1337/wiki/
router.get("/", async (req, res, next) => {
  try {
    const allPosts = await db.Page.findAll();
    res.send(allPosts);
  } catch (error) {
    next(error);
  }
});
// localhost: 1337/wiki/
router.post("/", async (req, res, next) => {
  try {
    const page = new Page({
      title: req.body.title,
      content: req.body.content
    });

    await page.save(); // save post data
    res.redirect("/"); // redirect page after saving our post data
  } catch (error) {
    next(error);
  }
});
//localhost:1337/wiki/add/
router.get("/add", async (req, res, next) => {
  try {
    // const allPosts = await db.Page.findAll();
    // res.send(allPosts);
    res.send(addPage());
  } catch (error) {
    next(error);
  }
});

module.exports = router;

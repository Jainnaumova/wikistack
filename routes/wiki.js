const express = require("express");
const router = express.Router();
const db = require("../models/index");
// const addPage = require("../views/addPage");
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikipage
} = require("../views");

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
    // let posterName = req.body.name;
    // let postContent = req.body.content;
    // const allUsers = await db.User.findAll();
    // if (allUsers.includes(posterName)) {
    //   const newPost = db.Posts.define();
    res.send(req.body);
    // }
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

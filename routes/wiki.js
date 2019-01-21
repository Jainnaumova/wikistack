const express = require("express");
const router = express.Router();
// const db = require("../models");
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

// localhost: 1337/wiki/
router.get("/", async (req, res, next) => {
  try {
    const allPosts = await Page.findAll();
    res.send(main(allPosts));
  } catch (error) {
    next(error);
  }
});
// localhost: 1337/wiki/
router.post("/", async (req, res, next) => {
  try {
    const [user, wasCreated] = await User.findOrCreate({
      // if user exist than add data, if not create user and than add data
      where: {
        name: req.body.authorName, // from 'addPage.js' file
        email: req.body.authorEmail // name & email from DB tables colomn names
      }
    });
    const page = new Page({
      title: req.body.title,
      content: req.body.content
    });
    await page.save(); // save post data
    page.setAuthor(user); // connect page to the certain user in DB
    res.redirect(`/wiki/${page.slug}`); // redirect page after saving our post data
  } catch (error) {
    next(error);
  }
});
//localhost:1337/wiki/add/
router.get("/add", async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    next(error);
  }
});
//localhost:1337/wiki/:slug/
router.get("/:slug", async (req, res, next) => {
  // has to be below than /add
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });

    res.send(wikiPage(page));
    // res.send(`Your dynamic route: ${req.params.slug}`);  check if it works
  } catch (error) {
    next(error);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get('/', async(req, res, next) => {
  try{
    const allPosts = await db.Page.findAll();
    res.send(allPosts);
  }
  catch (error){ next(error) }
})

module.exports = router;

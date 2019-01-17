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

router.post('/', async(req, res, next) => {
  try{
    let posterName = req.body.name;
    let postContent = req.body.content;
    const allUsers = await db.User.findAll();
    if(allUsers.includes(posterName)){
      const newPost = db.Posts.define()
    }
  }
  catch (error){ next(error) }
})



module.exports = router;

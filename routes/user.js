const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get('/', async(req, res, next) => {
  try{
    const allUsers = await db.User.findAll();
    res.send(allUsers);
  }
  catch (error){ next(error) }
})

module.exports = router;

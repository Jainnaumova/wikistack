const express = require("express");
const router = express.Router();

router.get('/user', async (req, res, next) => {
  try{
    res.send();
  }
  catch (error){ next(error) }
})

module.exports = router;

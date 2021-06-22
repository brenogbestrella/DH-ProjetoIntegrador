const express = require("express");
const router = express.Router();

const validator = require("../middlewares/LoginValidator");

// GET home page
router.get("/", validator, function (req, res, next) {
  res.render("home");
});

module.exports = router;

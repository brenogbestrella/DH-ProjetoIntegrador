const express = require("express");

const router = express.Router();

const controller = require("../controllers/LoginController");




// GET home page
router.get("/", function (req, res, next) {
  res.render("login");
});
router.post("/", controller.login);





module.exports = router;

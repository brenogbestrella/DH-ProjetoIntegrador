const express = require("express");

const router = express.Router();

const controller = require("../controllers/CadastroController");


router.get("/", function (req, res, next) {
  res.render("cadastro");
});
router.post("/", controller.cadastro);



module.exports = router;

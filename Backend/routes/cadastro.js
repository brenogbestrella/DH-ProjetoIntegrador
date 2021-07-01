const express = require("express");

const router = express.Router();

const controller = require("../controllers/CadastroController");


router.get("/", function (req, res, next) {
  res.render("cadastro"); // fazer arquivo geral (rotas/views)
});
router.post("/cadastrar", controller.cadastro); //colocar na rota de usuário



module.exports = router;

const express = require("express");

const controller = require("../controllers/UsuarioController");
const validator = require("../middlewares/UsuarioValidator");

const router = express.Router();

// GET home page
router.get("/", controller.index);
router.post("/", controller.create);
router.put("/:id", validator, controller.update);
router.delete("/:id", controller.destroy);

router.get("/all", controller.indexAll);

router.get("/pessoafisica", controller.indexPessoaFisica);

module.exports = router;

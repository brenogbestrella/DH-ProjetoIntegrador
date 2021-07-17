const express = require("express");

const controller = require("../controllers/UsuarioController");
const validator = require("../middlewares/UsuarioValidator");

const router = express.Router();

// CRUD USUARIOS
router.get("/", controller.indexAll);
router.post("/", controller.create);
router.put("/:id", validator, controller.update);
router.delete("/:id", controller.destroy);
    
//GET DETALHADO
router.get("/pessoafisica", controller.indexPessoaFisica);
router.get("/pessoajuridica", controller.indexPessoaJuridica);

router.get("/:id", controller.indexById);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;

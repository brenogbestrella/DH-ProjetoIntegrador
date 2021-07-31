const express = require("express");

const controller = require("../controllers/UsuarioController");
const validator = require("../middlewares/LoginValidator");

const router = express.Router();

// CRUD USUARIOS
router.post("/", controller.create);
router.use(validator)
router.get("/", controller.indexAll);
router.put("/", controller.update);
router.delete("/", controller.destroy);
    
//GET DETALHADO
router.get("/pessoafisica", controller.indexPessoaFisica);
router.get("/pessoajuridica", controller.indexPessoaJuridica);

router.get("/meuperfil", controller.index);
router.get("/:id", controller.indexById);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;

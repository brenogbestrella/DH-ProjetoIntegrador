const express = require("express");

const controller = require("../controllers/MoedaController");
const validator = require("../middlewares/MoedaValidator");

const router = express.Router();

// CRUD USUARIOS
router.get("/", controller.indexAll);
router.post("/", controller.create);
router.put("/:id", validator, controller.update);
router.delete("/:id", controller.destroy);
    
//GET DETALHADO
router.get("/:id", controller.indexById);


module.exports = router;
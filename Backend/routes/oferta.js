const express = require("express");

const controller = require("../controllers/OfertaController");
// const validator = require("../middlewares/OfertaValidator");

const router = express.Router();

// GET home page
router.get("/:id", controller.index);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

router.get("/", controller.indexAll);

module.exports = router;

//tranforma a rota '/' para indexALL e a rota '/:id' para index unico
// criar rota de oferta

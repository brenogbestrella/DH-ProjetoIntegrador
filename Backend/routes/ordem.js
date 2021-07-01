const express = require("express");

const controller = require("../controllers/OrdemController");
// const validator = require("../middlewares/OrdemValidator");

const router = express.Router();

// GET home page
router.get("/", controller.index);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

router.get("/all", controller.indexAll);

module.exports = router;

//tranforma a rota '/' para indexALL e a rota '/:id' para index unico
// criar rota de oferta

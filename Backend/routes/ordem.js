const express = require("express");

const controller = require("../controllers/OrdemController");
const validator = require("../middlewares/UsuarioValidator");

const router = express.Router();

// GET home page
router.get("/", controller.indexAll);
router.post("/", controller.create);
router.put("/:id", validator, controller.update);
router.delete("/:id", controller.destroy);


router.get("/:id", controller.indexById);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;

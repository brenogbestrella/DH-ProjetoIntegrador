const express = require("express");

const controller = require("../controllers/OfertaController");
const validator = require("../middlewares/LoginValidator")

const router = express.Router();


router.get("/", controller.indexAll);
router.post("/", validator, controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

//GET DETALHADO
router.get("/:id", controller.indexById);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;
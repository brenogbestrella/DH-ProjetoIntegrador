const express = require("express");

const controller = require("../controllers/OfertaController");
const validator = require("../middlewares/LoginValidator");

const router = express.Router();


router.get("/", controller.indexAll);
router.delete("/:id", controller.destroy);
router.use(validator)
router.post("/", controller.create);
router.put("/:id", controller.update);


//GET DETALHADO
router.get("/minhasofertas", controller.indexAllByUser);
router.get("/:id", controller.indexById);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;
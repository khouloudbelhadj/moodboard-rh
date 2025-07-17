const express = require("express");
const router = express.Router();
const equipeController = require("../controllers/equipe.controller");

router.post("/addEquipe", equipeController.createEquipe);
router.get("/allEquipes", equipeController.getAllEquipes);
router.put("/:id/updateEquipe", equipeController.updateEquipe);
router.delete("/:id/deleteEquipe", equipeController.deleteEquipe);

module.exports = router;

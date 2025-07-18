const express = require("express");
const router = express.Router();
const equipeController = require("../controllers/equipe.controller");

router.post("/addEquipe", equipeController.createEquipe);
router.get("/allEquipes", equipeController.getAllEquipes);
router.put("/updateEquipe/:id", equipeController.updateEquipe);
router.delete("/deleteEquipe/:id", equipeController.deleteEquipe);

router.get("/getEquipeById/:id", equipeController.getEquipeById);

module.exports = router;

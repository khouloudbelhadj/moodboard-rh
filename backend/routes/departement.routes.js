const express = require("express");
const router = express.Router();
const departementController = require("../controllers/departement.controller");

router.post("/addDepartement", departementController.createDepartement);
router.get("/allDepartements", departementController.getAllDepartements);
router.put("/updateDepartement/:id", departementController.updateDepartement);
router.delete("/deleteDepartement/:id", departementController.deleteDepartement);

router.get("/getDepartementById/:id", departementController.getDepartementById);
module.exports = router;

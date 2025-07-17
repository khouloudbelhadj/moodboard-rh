const express = require("express");
const router = express.Router();
const departementController = require("../controllers/departement.controller");

router.post("/addDepartement", departementController.createDepartement);
router.get("/allDepartements", departementController.getAllDepartements);
router.put("/:id/updateDepartement", departementController.updateDepartement);
router.delete("/:id/deleteDepartement", departementController.deleteDepartement);

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/addUser", userController.createUser);
router.get("/allUsers", userController.getAllUsers);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);

router.get("/getUserById/:id", userController.getUserById);

router.get("/getUsersByEquipe/:equipeId", userController.getUsersByEquipe);
router.get("/getUsersByDepartement/:departementId", userController.getUsersByDepartement);

module.exports = router;

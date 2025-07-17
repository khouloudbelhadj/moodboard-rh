const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/addUser", userController.createUser);
router.get("/allUsers", userController.getAllUsers);
router.put("/:id/updateUser", userController.updateUser);
router.delete("/:id/deleteUser", userController.deleteUser);

module.exports = router;

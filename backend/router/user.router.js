const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();


router.post("/singup", userController.signUp)
router.post("/login", userController.logIn)


module.exports = router;
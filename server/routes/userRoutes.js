const express = require("express");
const registerUser = require("../controller/userController");

const router = express.Router();

router.route("/register").post(registerUser);
// router.route('/login', authUser);

module.exports = router;

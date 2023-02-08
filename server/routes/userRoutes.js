const express = require("express");
const {registerUser, authUser, allUsers} = require("../controller/userController");
// const authUser = require("../controller/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route("/").get(allUsers);

module.exports = router;

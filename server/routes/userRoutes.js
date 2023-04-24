const express = require("express");
const {registerUser, authUser, allUsers} = require("../controller/userController");
const {protect} = require("../middleware/authMiddileware");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);;
router.post("/login", authUser);
//router.route("/").get(protect, allUsers);

module.exports = router;

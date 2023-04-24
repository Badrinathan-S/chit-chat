const express = require("express");
const {protect} = require("../middleware/authMiddileware");


const router = express.Router();


// router.route("/").post(protect, accessChat);
// router.router("/").get(protect, fetchChat);

// router.route("/group").post(protect, createGroupChat);
// router.route("/rename").put(protect, renameGroupChat);
// router.route("/groupremove").put(protect, removeFromGroup);
// router.route("/groupadd").put(protect, addFromGroup);


module.exports= router;
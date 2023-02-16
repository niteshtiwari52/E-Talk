const { Router } = require("express");
const express = require("express");
// const upload = require("../utils/multer");
const multer = require("multer");
const {
  registerUser,
  authUser,
  allUsers,
  getmyself,
  uploadProfileImage,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// // multer configuration
// const storage = multer.memoryStorage();
const storage = multer.diskStorage({});
const upload = multer({ storage });

router.route("/").post(registerUser).get(protect, allUsers);
router.route("/getmyself").get(protect, getmyself);
router.route("/login").post(authUser);
router
  .route("/profilepic")
  .put(protect, upload.single("image"), uploadProfileImage);
module.exports = router;

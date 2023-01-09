const { Router } = require('express');
const express = require('express');
const { registerUser, authUser, allUsers, getmyself } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.route("/getmyself").get(protect, getmyself);
router.route("/login").post(authUser);

module.exports = router;
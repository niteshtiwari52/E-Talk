const { Router } = require('express');
const express = require('express');
const { registerUser, authUser, allUser, allUsers } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post('/login',authUser);

module.exports = router;
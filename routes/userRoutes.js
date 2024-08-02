const express = require('express');
const { signup, login, verifyOTP, resetPassword, subscribe } = require('../controllers/userController');
const {signupValidation, resetPasswordValidation} = require('../middleware/authValidation')
const router = express.Router();

router.post('/signup', signupValidation, signup);
router.post('/login', login);
router.post('/reset-password', resetPasswordValidation, resetPassword);
router.post('/verify-otp', verifyOTP);
router.post('/subscribe', subscribe);

module.exports = router;
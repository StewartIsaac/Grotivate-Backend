const express = require('express');
const { signup, login, resetPassword } = require('../controllers/userController');
const {signupValidation, resetPasswordValidation} = require('../middleware/authValidation')
const router = express.Router();

router.post('/signup', signupValidation, signup);
router.post('/login', login);
router.post('/reset-password', resetPasswordValidation, resetPassword);

module.exports = router;
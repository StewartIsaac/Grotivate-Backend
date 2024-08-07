const express = require("express");
const {
  signup,
  login,
  verifyOTP,
  requestPasswordResetOTP,
  resetPasswordWithOTP,
  subscribe,
} = require("../controllers/userController");

const {
  signupValidation,
  requestPasswordResetOTPValidation,
  resetPasswordWithOTPValidation,
} = require("../middleware/authValidation");
const router = express.Router();

router.post("/signup", signupValidation, signup);
router.post("/login", login);
router.post(
  "/request-password-reset-otp",
  requestPasswordResetOTPValidation,
  requestPasswordResetOTP
);
router.post(
  "/reset-password-with-otp",
  resetPasswordWithOTPValidation,
  resetPasswordWithOTP
);
router.post("/verify-otp", verifyOTP);
router.post("/subscribe", subscribe);

module.exports = router;

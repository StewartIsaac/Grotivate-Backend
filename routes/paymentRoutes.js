const express = require("express");
const {
  initializeTransaction,
  verifyTransaction,
} = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/initialize", authMiddleware, initializeTransaction);
router.get("/verify", authMiddleware, verifyTransaction);

module.exports = router;

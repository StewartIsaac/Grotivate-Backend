const express = require("express");
const {
  initializeTransaction,
  verifyTransaction,
} = require("../controllers/paymentController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/initialize", verifyToken, initializeTransaction);
router.get("/verify", verifyToken, verifyTransaction);

module.exports = router;

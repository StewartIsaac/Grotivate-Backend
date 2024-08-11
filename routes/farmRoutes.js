const express = require("express");
const { createFarm, getFarm } = require("../controllers/farmController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/farm", authMiddleware, createFarm);
router.get("/farm", authMiddleware, getFarm);

module.exports = router;

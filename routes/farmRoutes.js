const express = require("express");
const { createFarm, getFarmData } = require("../controllers/farmController");

const router = express.Router();

router.post("/about-farm", createFarm);
router.get("/retrieve-about-farm", getFarmData);

module.exports = router;

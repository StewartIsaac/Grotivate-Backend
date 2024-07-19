const express = require('express');
const { initializeTransaction, verifyTransaction } = require('../controllers/paymentController');
const router = express.Router();

router.post('/initialize', initializeTransaction);
router.get('/verify', verifyTransaction);

module.exports = router;
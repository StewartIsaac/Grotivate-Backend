const express = require('express');
const { getLivestock, addLivestock, updateLivestock, deleteLivestock } = require('../controllers/livestockController');
const { verifyToken, checkSubscription } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getLivestock);
router.post('/', verifyToken, checkSubscription, addLivestock);
router.put('/:id', verifyToken, checkSubscription, updateLivestock);
router.delete('/:id', verifyToken, checkSubscription, deleteLivestock);

module.exports = router;